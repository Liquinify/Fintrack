export type ClientInfo = {
  clientId: string;
  name: string;
  accounts: {
    id: string;
    balance: number;
    cashbackType: string;
    maskedPan: [string];
    type: string;
  }[];
};

export type Transactions = {
  id: string;
  time: number;
  description: string;
  mcc: number;
  originalMcc: number;
  hold: number | null;
  amount: number;
  operationAmount: number;
  currencyCode: number;
  commissionRate: number | null;
  cashbackAmount: number;
  balance: number;
  comment: string;
  receiptId: string;
  invoiceId: string;
  counterEdrpou: string;
  counterIban: string;
  counterName: string;
};

export type CashBalances = {
  id?: string,
  balanceName: string,
  balance: number,
  currency: string,
  isInBalance: boolean,
  isSavingsAccount: boolean
}