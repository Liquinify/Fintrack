<template>
  <UDashboardPanel>
    <template #header>
      <AppHeader />
    </template>
    <template #body>
      <main>
        <div class="mb-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">Your Cards</h2>
            <button class="text-emerald-400 text-sm hover:text-emerald-300">
              Manage Limits
            </button>
          </div>
          <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <CreditCard v-for="card in clientData?.accounts" :key="card.id" :card="card" />
          </section>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UCard class="rounded-3xl bg-[#1d1e22] overflow-y-scroll">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <span class="text-green-500">₴</span>
              Cash Accounts
            </h3>
            <div class="space-y-4" v-for="cash in cashStore.cashBalance" :key="cash.id">
              <div class="flex justify-between items-start p-4 hover:opacity-80 transition-opacity hover:bg-gray-800/30">
                <div class="flex-1">
                  <p class="text-sm mb-1">{{ cash.balanceName }}</p>
                  <p class="text-xs" v-if="cash.isSavingsAccount">Savings Account</p>
                </div>
                <div class="text-right">
                  <p class="text-lg font-semibold mb-1">{{ cash.balance }}</p>
                </div>
              </div>
            </div>
          </UCard>
          <UCard class="rounded-3xl bg-[#1d1e22]">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <span class="text-orange-500">₿</span>
              Crypto Wallets
            </h3>
            <div class="space-y-4 p-6">
             <!-- Crypto wallets content will go here -->
            </div>
          </UCard>
        </div>
      </main>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import CreditCard from '~/components/credit-cards/CreditCard.vue';
import { useAddMoneyStore } from '../stores/addMoney';

const { clientData } = useClientInfo();
const cashStore = useAddMoneyStore();
console.log(cashStore.cashBalance);
</script>

<style lang="scss" scoped></style>
