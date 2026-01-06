<template>
  <UDashboardPanel id="home">
    <template #header>
      <AppHeader />
    </template>
    <template #body>
      <DashboardStats :range="range" :period="period" />
      <main class="grid grid-cols-12 gap-6">
        <section class="col-span-12 xl:col-span-8 space-y-6">
          <TransactionsOverview />
          <DataTable />
        </section>
        <aside class="col-span-12 xl:col-span-4 space-y-6">
          <CreditCards />
          <CircularProgress />
          <UCard class="space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold">Financial Goals</h3>
              <UButton size="xs" variant="ghost">+</UButton>
            </div>

            <div
              v-for="goal in financialGoals"
              :key="goal.id"
              class="space-y-3 mt-1.5q"
            >
              <div class="flex justify-between text-sm">
                <span class="font-medium">{{ goal.title }}</span>
                <span>{{ goal.progress }}%</span>
              </div>

              <UProgress v-model="goal.progress" />

              <p class="text-xs text-muted">
                ${{ goal.currentAmount }} of ${{ goal.targetAmount }}
              </p>
            </div>
          </UCard>
        </aside>
      </main>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import DashboardStats from "~/components/DashboardStats.vue";
import CircularProgress from "~/components/CircularProgress.vue";
import DataTable from "~/components/DataTable.vue";
import CreditCards from "~/components/credit-cards/CreditCardsList.vue";

const financialGoals = [
  {
    id: 1,
    title: "Emergency Fund",
    progress: 69,
    currentAmount: 6500,
    targetAmount: 10000,
  },
  {
    id: 2,
    title: "Hawaii Vacation",
    progress: 43,
    currentAmount: 3200,
    targetAmount: 7500,
  },
];

const range = shallowRef({
  start: new Date(),
  end: new Date(),
});
const period = ref("daily");
</script>

<style lang="scss" scoped></style>
