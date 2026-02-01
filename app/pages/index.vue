<template>
  <UDashboardPanel id="home">
    <template #header>
      <AppHeader />
    </template>
    <template #body>
      <main class="grid grid-cols-12 gap-6">
        <section class="col-span-12 xl:col-span-8 space-y-6">
          <DailyBudget />
          <TransactionsOverview />
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
import DailyBudget from "~/components/DailyBudget.vue";
import FinancialGoals from "~/components/FinancialGoals.vue";
import RecentTransactions from "~/components/RecentTransactions.vue";
</script>

