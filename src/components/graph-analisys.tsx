import React, { useMemo } from "react";

interface TransactionData {
  initiator: string | number;
  recipient: string | number;
  amount: number;
  isFraud: number;
  transactionType: string;
}

interface GraphNode {
  id: string;
  group?: number;
  val?: number;
  color?: string;
}

interface GraphLink {
  source: string;
  target: string;
  value: number;
  isFraud: number;
  color?: string;
  width?: number;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

interface GraphProps {
  data: TransactionData[];
}

const GraphAnalysis: React.FC<GraphProps> = ({ data }) => {

  const graphData = useMemo<GraphData>(() => {
    const nodesMap = new Map<string, GraphNode>();
    const links: GraphLink[] = [];

    // Process data to create nodes and links
    data.forEach((tx) => {
      const source = String(tx.initiator);
      const target = String(tx.recipient);

      // Create or update nodes
      if (!nodesMap.has(source)) {
        nodesMap.set(source, { 
          id: source, 
          group: 1,
          val: 1,
          color: '#4f46e5'
        });
      }
      
      if (!nodesMap.has(target)) {
        nodesMap.set(target, { 
          id: target, 
          group: target.includes('-') ? 2 : 1, // Different group for merchants/ATMs
          val: 1,
          color: target.includes('-') ? '#059669' : '#4f46e5'
        });
      }

      // Create links
      links.push({
        source,
        target,
        value: tx.amount,
        isFraud: tx.isFraud,
        color: tx.isFraud ? '#ef4444' : '#6b7280',
        width: tx.isFraud ? 3 : 1
      });
    });

    return {
      nodes: Array.from(nodesMap.values()),
      links,
    };
  }, [data]);

  // Fallback component when ForceGraph is not available
  const FallbackGraph = () => (
    <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center p-8">
        <div className="mb-4">
          <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Network Graph Analysis</h3>
        <p className="text-gray-600 mb-4">
          Interactive network visualization showing transaction relationships
        </p>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-medium text-gray-900 mb-2">Graph Statistics:</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <div>Nodes: {graphData.nodes.length}</div>
            <div>Connections: {graphData.links.length}</div>
            <div>Fraud Links: {graphData.links.filter(l => l.isFraud).length}</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Since react-force-graph is not available in this environment, 
  // we'll show the fallback component
  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Transaction Network Graph</h3>
        <p className="text-sm text-gray-600">
          Visualizes the relationships between transaction initiators and recipients
        </p>
      </div>
      
      <FallbackGraph />
      
      {/* Legend */}
      <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Legend</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              <span className="text-sm">Account/User</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-green-600"></div>
              <span className="text-sm">Merchant/ATM</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-gray-400"></div>
              <span className="text-sm">Normal Transaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-1 bg-red-500"></div>
              <span className="text-sm">Fraudulent Transaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative: Simple Network Visualization */}
      <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-4">Network Summary</h4>
        <div className="space-y-3">
          {graphData.links.slice(0, 10).map((link, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg border ${
                link.isFraud ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  link.isFraud ? 'bg-red-500' : 'bg-green-500'
                }`}></div>
                <div className="text-sm">
                  <span className="font-mono text-xs text-gray-600">{link.source}</span>
                  <span className="mx-2">→</span>
                  <span className="font-mono text-xs text-gray-600">{link.target}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">${link.value.toLocaleString()}</div>
                <div className={`text-xs ${
                  link.isFraud ? 'text-red-600' : 'text-green-600'
                }`}>
                  {link.isFraud ? 'Fraud' : 'Normal'}
                </div>
              </div>
            </div>
          ))}
          {graphData.links.length > 10 && (
            <div className="text-center text-sm text-gray-500">
              ... and {graphData.links.length - 10} more transactions
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GraphAnalysis;