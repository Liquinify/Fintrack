<template>
  <UDashboardPanel id="home">
    <template #header>
      <AppHeader />
    </template>
    <template #body>
      <DashboardStats :range="range" :period="period" />
      <main class="grid grid-cols-12 gap-6">
        <section class="col-span-12 xl:col-span-8 space-y-6">
          <UCard>
            <BarChart
              :data="RevenuesData"
              :stacked="true"
              :height="250"
              :categories="RevenueCategoriesMultple"
              :y-axis="['desktop', 'mobile']"
              :group-padding="0"
              :bar-padding="0.2"
              :x-num-ticks="7"
              :radius="4"
              :x-formatter="xFormatter"
              :y-formatter="yFormatter"
              :legend-position="LegendPosition.TopRight"
              :hide-legend="true"
              :y-grid-line="true"
            />
          </UCard>
          <DataTable />
        </section>
        <aside class="col-span-12 xl:col-span-4 space-y-6">
          <CircularProgress/>
          <CreditCards />
          <UCard class="space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold">Financial Goals</h3>
              <UButton size="xs" variant="ghost">+</UButton>
            </div>

            <div
              v-for="goal in financialGoals"
              :key="goal.id"
              class="space-y-2"
            >
              <div class="flex justify-between text-sm">
                <span class="font-medium">{{ goal.title }}</span>
                <span>{{ goal.progress }}%</span>
              </div>

              <UProgress :value="goal.progress" />

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
import DashboardStats from '~/components/DashboardStats.vue'
import CircularProgress from '~/components/CircularProgress.vue'
import DataTable from '~/components/DataTable.vue'
import CreditCards from '~/components/CreditCards.vue';

const financialGoals = [
  {
    id: 1,
    title: 'Emergency Fund',
    progress: 69,
    currentAmount: 6500,
    targetAmount: 10000
  },
  {
    id: 2,
    title: 'Hawaii Vacation',
    progress: 43,
    currentAmount: 3200,
    targetAmount: 7500
  }
];

const range = shallowRef({
  start: new Date(),
  end: new Date()
})
const period = ref('daily')

const RevenueData = [
  { day: "Понеділок", spendings: 186 },
  { day: "Вівторок", spendings: 305 },
  { day: "Середа", spendings: 237 },
  { day: "Четвер", spendings: 73 },
  { day: "П'ятниця", spendings: 209 },
  { day: "Субота", spendings: 214 },
  { day: "Неділя", spendings: 214},
]

const RevenuesData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const xFormatter = (i: number): string => `${RevenueData[i]?.day}`
const yFormatter = (tick: number) => tick.toString()

const RevenueCategoriesMultple = {
  desktop: { name: 'Desktop', color: '#3b82f6' },
  mobile: { name: 'Mobile', color: '#22c55e' },
}
</script>


<style lang="scss" scoped>

</style>
