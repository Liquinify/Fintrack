export type ClientInfo = {
    clientId: string,
    name: string,
    accounts: {
        id: string
        balance: number,
        cashbackType: string
        maskedPan: [string]
        type: string
    }[]
}