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
          </div>
          <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <CreditCard v-for="card in clientData?.accounts" :key="card.id" :card="card" />
          </section>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UCard class="rounded-3xl bg-[#1d1e22] overflow-y-scroll" v-if="cashStore.cashBalance.length">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <span class="text-green-500">₴</span>
              Cash Accounts
            </h3>
            <CashBalances v-for="cash in cashStore.cashBalance" :key="cash.id" :cash="cash" />
          </UCard>
          <UCard class="rounded-3xl bg-[#1d1e22]" v-if="false">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <span class="text-orange-500">₿</span>
              Crypto Wallets
            </h3>
            <div class="space-y-4 p-6">
             <!-- TODO: Crypto wallets content will go here -->
            </div>
          </UCard>
        </div>
      </main>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import CreditCard from '~/components/credit-cards/CreditCard.vue';
import { useCashBalanceStore } from '@/stores/cash-balance';
import CashBalances from '~/components/CashBalances.vue';

const { clientData } = useClientInfo();
const cashStore = useCashBalanceStore();
</script>

