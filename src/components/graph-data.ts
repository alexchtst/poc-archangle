// Sample transaction data for fraud detection graph analysis
export const sampleTransactionData = [
  // Normal payment transactions
  {
    step: 0,
    transactionType: "PAYMENT",
    amount: 600.61,
    initiator: "4272001687747262",
    oldBalInitiator: 1708.06,
    newBalInitiator: 1107.45,
    recipient: "MERCHANT-001",
    oldBalRecipient: 0.0,
    newBalRecipient: 600.61,
    isFraud: 0
  },
  {
    step: 1,
    transactionType: "PAYMENT",
    amount: 125.50,
    initiator: "4151303907915307",
    oldBalInitiator: 2500.00,
    newBalInitiator: 2374.50,
    recipient: "MERCHANT-002",
    oldBalRecipient: 0.0,
    newBalRecipient: 125.50,
    isFraud: 0
  },
  {
    step: 2,
    transactionType: "PAYMENT",
    amount: 89.99,
    initiator: "4071860740506525",
    oldBalInitiator: 1200.00,
    newBalInitiator: 1110.01,
    recipient: "MERCHANT-003",
    oldBalRecipient: 0.0,
    newBalRecipient: 89.99,
    isFraud: 0
  },

  // Normal transfers between users
  {
    step: 3,
    transactionType: "TRANSFER",
    amount: 500.00,
    initiator: "4272001687747262",
    oldBalInitiator: 1107.45,
    newBalInitiator: 607.45,
    recipient: "4151303907915307",
    oldBalRecipient: 2374.50,
    newBalRecipient: 2874.50,
    isFraud: 0
  },
  {
    step: 4,
    transactionType: "TRANSFER",
    amount: 250.00,
    initiator: "4151303907915307",
    oldBalInitiator: 2874.50,
    newBalInitiator: 2624.50,
    recipient: "4071860740506525",
    oldBalRecipient: 1110.01,
    newBalRecipient: 1360.01,
    isFraud: 0
  },

  // Cash out transactions (normal)
  {
    step: 5,
    transactionType: "CASH_OUT",
    amount: 200.00,
    initiator: "4071860740506525",
    oldBalInitiator: 1360.01,
    newBalInitiator: 1160.01,
    recipient: "ATM-001",
    oldBalRecipient: 0.0,
    newBalRecipient: 0.0,
    isFraud: 0
  },
  {
    step: 6,
    transactionType: "CASH_OUT",
    amount: 300.00,
    initiator: "4151303907915307",
    oldBalInitiator: 2624.50,
    newBalInitiator: 2324.50,
    recipient: "ATM-002",
    oldBalRecipient: 0.0,
    newBalRecipient: 0.0,
    isFraud: 0
  },

  // FRAUDULENT ACTIVITY PATTERN 1: Suspicious large transfers
  {
    step: 7,
    transactionType: "TRANSFER",
    amount: 15000.00,
    initiator: "4646287153794123", // Suspicious account
    oldBalInitiator: 15500.00,
    newBalInitiator: 500.00,
    recipient: "4601716281699039", // Money mule account
    oldBalRecipient: 100.00,
    newBalRecipient: 15100.00,
    isFraud: 1
  },
  {
    step: 8,
    transactionType: "TRANSFER",
    amount: 14500.00,
    initiator: "4601716281699039", // Money mule quickly transfers out
    oldBalInitiator: 15100.00,
    newBalInitiator: 600.00,
    recipient: "4555123456789012", // Another suspicious account
    oldBalRecipient: 0.00,
    newBalRecipient: 14500.00,
    isFraud: 1
  },

  // FRAUDULENT ACTIVITY PATTERN 2: Rapid cash out after suspicious transfer
  {
    step: 9,
    transactionType: "CASH_OUT",
    amount: 14000.00,
    initiator: "4555123456789012",
    oldBalInitiator: 14500.00,
    newBalInitiator: 500.00,
    recipient: "ATM-REMOTE-001", // Remote ATM
    oldBalRecipient: 0.0,
    newBalRecipient: 0.0,
    isFraud: 1
  },

  // FRAUDULENT ACTIVITY PATTERN 3: Account takeover - unusual payments
  {
    step: 10,
    transactionType: "PAYMENT",
    amount: 2500.00,
    initiator: "4272001687747262", // Legitimate user's account compromised
    oldBalInitiator: 607.45,
    newBalInitiator: -1892.55, // Goes negative - suspicious
    recipient: "MERCHANT-SUSPICIOUS-001",
    oldBalRecipient: 0.0,
    newBalRecipient: 2500.00,
    isFraud: 1
  },
  {
    step: 11,
    transactionType: "PAYMENT",
    amount: 1800.00,
    initiator: "4272001687747262", // Same compromised account
    oldBalInitiator: -1892.55,
    newBalInitiator: -3692.55, // Even more negative
    recipient: "MERCHANT-SUSPICIOUS-002",
    oldBalRecipient: 0.0,
    newBalRecipient: 1800.00,
    isFraud: 1
  },

  // FRAUDULENT ACTIVITY PATTERN 4: Circular transfers (layering)
  {
    step: 12,
    transactionType: "TRANSFER",
    amount: 5000.00,
    initiator: "4646287153794123",
    oldBalInitiator: 500.00,
    newBalInitiator: 500.00, // Balance doesn't change - suspicious
    recipient: "4777888999000111",
    oldBalRecipient: 1000.00,
    newBalRecipient: 6000.00,
    isFraud: 1
  },
  {
    step: 13,
    transactionType: "TRANSFER",
    amount: 4800.00,
    initiator: "4777888999000111",
    oldBalInitiator: 6000.00,
    newBalInitiator: 1200.00,
    recipient: "4888999000111222",
    oldBalRecipient: 500.00,
    newBalRecipient: 5300.00,
    isFraud: 1
  },
  {
    step: 14,
    transactionType: "TRANSFER",
    amount: 4600.00,
    initiator: "4888999000111222",
    oldBalInitiator: 5300.00,
    newBalInitiator: 700.00,
    recipient: "4646287153794123", // Back to original account
    oldBalRecipient: 500.00,
    newBalRecipient: 5100.00,
    isFraud: 1
  },

  // More normal transactions to balance the dataset
  {
    step: 15,
    transactionType: "PAYMENT",
    amount: 45.67,
    initiator: "4071860740506525",
    oldBalInitiator: 1160.01,
    newBalInitiator: 1114.34,
    recipient: "MERCHANT-004",
    oldBalRecipient: 0.0,
    newBalRecipient: 45.67,
    isFraud: 0
  },
  {
    step: 16,
    transactionType: "PAYMENT",
    amount: 78.90,
    initiator: "4151303907915307",
    oldBalInitiator: 2324.50,
    newBalInitiator: 2245.60,
    recipient: "MERCHANT-005",
    oldBalRecipient: 0.0,
    newBalRecipient: 78.90,
    isFraud: 0
  },
  {
    step: 17,
    transactionType: "CASH_IN",
    amount: 1000.00,
    initiator: "4071860740506525",
    oldBalInitiator: 1114.34,
    newBalInitiator: 2114.34,
    recipient: "BANK-BRANCH-001",
    oldBalRecipient: 0.0,
    newBalRecipient: 0.0,
    isFraud: 0
  },
  {
    step: 18,
    transactionType: "DEBIT",
    amount: 156.78,
    initiator: "4151303907915307",
    oldBalInitiator: 2245.60,
    newBalInitiator: 2088.82,
    recipient: "UTILITY-COMPANY-001",
    oldBalRecipient: 0.0,
    newBalRecipient: 156.78,
    isFraud: 0
  },

  // Additional fraudulent pattern: Structuring (breaking large amounts into smaller ones)
  {
    step: 19,
    transactionType: "TRANSFER",
    amount: 2999.99,
    initiator: "4999000111222333",
    oldBalInitiator: 12000.00,
    newBalInitiator: 9000.01,
    recipient: "4111222333444555",
    oldBalRecipient: 500.00,
    newBalRecipient: 3499.99,
    isFraud: 1
  },
  {
    step: 20,
    transactionType: "TRANSFER",
    amount: 2999.99,
    initiator: "4999000111222333",
    oldBalInitiator: 9000.01,
    newBalInitiator: 6000.02,
    recipient: "4222333444555666",
    oldBalRecipient: 200.00,
    newBalRecipient: 3199.99,
    isFraud: 1
  },
  {
    step: 21,
    transactionType: "TRANSFER",
    amount: 2999.99,
    initiator: "4999000111222333",
    oldBalInitiator: 6000.02,
    newBalInitiator: 3000.03,
    recipient: "4333444555666777",
    oldBalRecipient: 100.00,
    newBalRecipient: 3099.99,
    isFraud: 1
  }
];