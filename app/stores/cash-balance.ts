import { v4 as uuidv4 } from 'uuid';
import type { CashBalances } from '~/types/client-info';


export const useCashBalanceStore = defineStore('add-money', () => {
    const cashBalance = ref<CashBalances[]>([])
    
    function addNewBalance(balance: CashBalances) {
        const newBalance = {
            id: uuidv4(), 
            balanceName: balance.balanceName,
            balance: balance.balance,
            currency: balance.currency,
            isInBalance: balance.isInBalance,
            isSavingsAccount: balance.isSavingsAccount
        }
        cashBalance.value = [
            ...cashBalance.value, newBalance
        ]
    }

    function removeSelectedBalance(id: string) {
        cashBalance.value = cashBalance.value.filter((balance: CashBalances) => balance.id !== id)
    }

    return {cashBalance, addNewBalance, removeSelectedBalance}
})