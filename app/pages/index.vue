<template>
  <UDashboardPanel id="home">
    <template #header>
      <AppHeader />
    </template>
    <template #body>
      <main class="grid grid-cols-12 gap-6">
        <section class="col-span-12 xl:col-span-8 space-y-6">
          <DailyBudget />
          <WeeklyTransactions />
        </section>
        <aside class="col-span-12 xl:col-span-4 space-y-6">
          <FinancialGoals />
          <RecentTransactions />
        </aside>
      </main>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import FinancialGoals from "~/components/balances/FinancialGoals.vue";
import RecentTransactions from "~/components/transactions/RecentTransactions.vue";
import DailyBudget from "~/components/transactions/DailyBudget.vue";
import WeeklyTransactions from "~/components/transactions/WeeklyTransactions.vue";
</script>
