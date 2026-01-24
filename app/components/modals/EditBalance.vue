<template>
    <div>
        <div class="flex justify-center">
          <div class="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
            <UIcon name="i-heroicons-wallet" class="w-8 h-8" />
          </div>
        </div>
        <div class="text-center space-y-2">
          <p class="text-xs text-gray-400">Назва рахунку</p>
          <UInput style="text-align: center" class="border-b border-gray-700 w-full" variant="none" size="xl" type="text" v-model="cash.balanceName" />
          <p class="text-xs text-gray-500">
            Доданий рахунок буде відображено в розділі «Рахунки та готівка», і ви в будь-який момент можете його змінити.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-xs text-gray-400 mb-2 block">Баланс</label>
            <UInput type="number" placeholder="0" v-model.number="cash.balance" />
          </div>
          <div>
            <label class="text-xs text-gray-400 mb-2 block">Валюта</label>
            <USelect 
              :options="[{ label: 'UAH', value: 'uah' }]" 
              size="lg"
            />
          </div>
        </div>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 mt-1 shrink-0" />
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-medium">Включити у баланс</p>
                <USwitch v-model="cash.isInBalance" />
              </div>
              <p class="text-xs text-gray-500">
                Якщо вимкнути опцію, баланс рахунку буде враховуватись тільки в аналітиці, але не буде включений у загальний баланс.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 mt-1 shrink-0" />
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-medium">Зберігаючий рахунок</p>
                <USwitch v-model="cash.isSavingsAccount"/>
              </div>
              <p class="text-xs text-gray-500">
                Якщо ввімкнути опцію ваш рахунок буде відображатись в розділі "Збереження"
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <UButton class="w-100" color="error" label="Видалити рахунок" @click="cashStore.removeSelectedBalance(cash.id as string)" />
          </div>
        </div>  
    </div>
</template>

<script setup lang="ts">
import type { CashBalances } from '~/types/client-info';

defineProps<{
  cash: CashBalances
}>()

const cashStore = useCashBalanceStore()
</script>

<style lang="scss" scoped>

</style>