<template>
    <div class="space-y-6">
        <!-- <UTabs
            :items="tabs"
            class="w-full"
            :content="false"
        /> -->
        <UFormField label="Account Name">
            <UInput
                v-model="newBalance.balanceName"
                placeholder="New Account"
                type="text"
            />
        </UFormField>
        <UFormField label="Description">
            <p class="text-sm text-gray-400">
                Account details will be displayed in the "Accounts and Cooking" section, and at any time you can change it.
            </p>
        </UFormField>
        <div class="grid grid-cols-2 gap-4">
            <UFormField label="Balance">
                <UInput
                    v-model.number="newBalance.balance"
                    placeholder="0"
                    type="number"
                />
            </UFormField>
            <!-- <UFormField label="Currency">
                <USelect
                    v-model=""
                    :options="currencyOptions"
                />
            </UFormField> -->
        </div>
        <!-- Toggles -->
        <div class="space-y-4">
            <div class="flex items-start space-x-3 pb-4 border-b border-gray-700">
                <UCheckbox v-model="newBalance.isInBalance" />
                <div class="flex-1">
                    <p class="text-sm font-medium text-white">Include in Balance</p>
                    <p class="text-xs text-gray-400 mt-1">
                        If enabled, the account balance will be taken into account only in analytics, but not included in total balance.
                    </p>
                </div>
            </div>
            <div class="flex items-start space-x-3">
                <UCheckbox v-model="newBalance.isSavingsAccount" />
                <div class="flex-1">
                    <p class="text-sm font-medium text-white">Savings Account</p>
                    <p class="text-xs text-gray-400 mt-1">
                        If enabled, your account will be displayed in the "Savings" section.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-end gap-3 mt-3">
        <UButton
            color="neutral"
            @click="cashStore.addNewBalance(newBalance)"
        >
            Add Account
        </UButton>
    </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { ref } from 'vue'

const cashStore = useAddMoneyStore()

const newBalance = ref({
    balanceName: '',
    balance: 0,
    currence: 'USD',
    isInBalance: false,
    isSavingsAccount: false
})


const tabs = ref<TabsItem[]>([
    { label: 'Income' },
    { label: 'Expense' }
])


</script>

<style lang="scss" scoped>

</style>