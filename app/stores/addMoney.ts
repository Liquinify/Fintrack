import { v4 as uuidv4 } from 'uuid';


export const useAddMoneyStore = defineStore('add-money', () => {
    const cashBalance = ref<any>([])
    
    function addNewBalance(balance) {
        const newBalance = {
            id: uuidv4(), 
            balanceName: balance.balanceName,
            balance: balance.balance,
            currency: balance.currency,
            isInBalance: balance.isInBalance,
            isSavingsAccount: balance.isSavingsAccount
        }
        console.log('Added: ', cashBalance)
        cashBalance.value = [
            ...cashBalance.value, newBalance
        ]
    }

    return {cashBalance, addNewBalance}
})