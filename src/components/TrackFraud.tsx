import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, DollarSign, TrendingUp, Users, Filter } from 'lucide-react';

function TrackFraud() {
    const mockData = [
        {
            "step": 0,
            "transactionType": "PAYMENT",
            "amount": 600.61,
            "initiator": 4272001687747262,
            "oldBalInitiator": 1708.06,
            "newBalInitiator": 1107.45,
            "recipient": "42-0000414",
            "oldBalRecipient": 0.0,
            "newBalRecipient": 600.61,
            "isFraud": 0
        },
        {
            "step": 1,
            "transactionType": "TRANSFER",
            "amount": 20593.16,
            "initiator": 4272001687747262,
            "oldBalInitiator": 1107.45,
            "newBalInitiator": 1107.45,
            "recipient": "4601716281699039",
            "oldBalRecipient": 1149.02,
            "newBalRecipient": 1149.02,
            "isFraud": 1
        },
        {
            "step": 2,
            "transactionType": "PAYMENT",
            "amount": 625.71,
            "initiator": 4151303907915307,
            "oldBalInitiator": 23.67,
            "newBalInitiator": 23.67,
            "recipient": "26-0001158",
            "oldBalRecipient": 0.0,
            "newBalRecipient": 0.0,
            "isFraud": 0
        },
        {
            "step": 3,
            "transactionType": "PAYMENT",
            "amount": 596.69,
            "initiator": 4071860740506525,
            "oldBalInitiator": 88.07,
            "newBalInitiator": -508.63,
            "recipient": "21-0007069",
            "oldBalRecipient": 0.0,
            "newBalRecipient": 596.69,
            "isFraud": 0
        },
        {
            "step": 4,
            "transactionType": "TRANSFER",
            "amount": 18533.84,
            "initiator": 4071860740506525,
            "oldBalInitiator": -508.63,
            "newBalInitiator": -19042.47,
            "recipient": "4646287153794123",
            "oldBalRecipient": 33.24,
            "newBalRecipient": 18567.08,
            "isFraud": 0
        },
        {
            "step": 5,
            "transactionType": "CASH_OUT",
            "amount": 15000.50,
            "initiator": 4601716281699039,
            "oldBalInitiator": 1149.02,
            "newBalInitiator": -13851.48,
            "recipient": "ATM-001",
            "oldBalRecipient": 0.0,
            "newBalRecipient": 0.0,
            "isFraud": 1
        },
        {
            "step": 6,
            "transactionType": "DEBIT",
            "amount": 2500.00,
            "initiator": 4646287153794123,
            "oldBalInitiator": 18567.08,
            "newBalInitiator": 16067.08,
            "recipient": "MERCHANT-789",
            "oldBalRecipient": 0.0,
            "newBalRecipient": 2500.00,
            "isFraud": 0
        },
        {
            "step": 7,
            "transactionType": "TRANSFER",
            "amount": 50000.00,
            "initiator": 4646287153794123,
            "oldBalInitiator": 16067.08,
            "newBalInitiator": -33932.92,
            "recipient": "4272001687747262",
            "oldBalRecipient": 1107.45,
            "newBalRecipient": 51107.45,
            "isFraud": 1
        }
    ];

    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedChart, setSelectedChart] = useState('timeline');

    // Data processing
    const fraudCount = mockData.filter(t => t.isFraud === 1).length;
    const totalTransactions = mockData.length;
    const fraudRate = ((fraudCount / totalTransactions) * 100).toFixed(1);
    const totalAmount = mockData.reduce((sum, t) => sum + t.amount, 0);

    // Chart data preparations
    const timelineData = mockData.map((transaction) => ({
        step: transaction.step,
        amount: transaction.amount,
        isFraud: transaction.isFraud,
        type: transaction.transactionType,
        fraudStatus: transaction.isFraud ? 'Fraud' : 'Legitimate'
    }));

    const filteredData = selectedFilter === 'all' ? timelineData :
        selectedFilter === 'fraud' ? timelineData.filter(t => t.isFraud === 1) :
            timelineData.filter(t => t.isFraud === 0);


    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Fraud Detection Dashboard</h1>
                    <p className="text-gray-600">Monitor and analyze transaction patterns for fraud detection</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                                <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-full">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Fraud Cases</p>
                                <p className="text-2xl font-bold text-red-600">{fraudCount}</p>
                            </div>
                            <div className="p-3 bg-red-100 rounded-full">
                                <AlertTriangle className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Fraud Rate</p>
                                <p className="text-2xl font-bold text-orange-600">{fraudRate}%</p>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-full">
                                <Users className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Amount</p>
                                <p className="text-2xl font-bold text-green-600">${totalAmount.toLocaleString()}</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-full">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">Filter:</span>
                            <select
                                value={selectedFilter}
                                onChange={(e) => setSelectedFilter(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                            >
                                <option value="all">All Transactions</option>
                                <option value="fraud">Fraud Only</option>
                                <option value="legitimate">Legitimate Only</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">Chart Type:</span>
                            <select
                                value={selectedChart}
                                onChange={(e) => setSelectedChart(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                            >
                                <option value="timeline">Timeline</option>
                                <option value="distribution">Type Distribution</option>
                                <option value="pie">Fraud vs Legitimate</option>
                                <option value="scatter">Amount vs Balance Change</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Chart */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Transaction Timeline
                        </h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={filteredData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="step" />
                                <YAxis />
                                <Tooltip
                                    formatter={(value, name, props) => [
                                        `$${value.toLocaleString()}`,
                                        name,
                                        `Type: ${props.payload.type}`,
                                        `Status: ${props.payload.fraudStatus}`
                                    ]}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    dot={(props) => {
                                        const { cx, cy, payload } = props;
                                        return (
                                            <circle
                                                cx={cx}
                                                cy={cy}
                                                r={4}
                                                fill={payload.isFraud ? '#ef4444' : '#22c55e'}
                                                stroke={payload.isFraud ? '#ef4444' : '#22c55e'}
                                            />
                                        );
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Transaction Table */}
                <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Transaction Details</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Initiator</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mockData.map((transaction, index) => (
                                    <tr key={index} className={transaction.isFraud ? 'bg-red-50' : ''}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.step}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.transactionType}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${transaction.amount.toLocaleString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-mono text-xs">{transaction.initiator}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-mono text-xs">{transaction.recipient}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${transaction.isFraud
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-green-100 text-green-800'
                                                }`}>
                                                {transaction.isFraud ? 'Fraud' : 'Legitimate'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackFraud;