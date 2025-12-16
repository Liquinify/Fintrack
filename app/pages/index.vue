<template>
  <UDashboardPanel id="home">
    <template #header>
      <AppHeader />
    </template>
    <template #body>
      <section class="flex justify-between">
        <div class="w-[50%]">
          <h2>Transactions</h2>
          <UTable :data="data" class="flex-1" />
        </div>
        <div class="w-[50%]">
          <h2>Transactions Overview</h2>
          <BarChart
            :data="RevenuesData"
            :stacked="true"
            :height="600"
            :categories="RevenueCategoriesMultple"
            :y-axis="['desktop', 'mobile']"
            :group-padding="0"
            :bar-padding="0.2"
            :x-num-ticks="6"
            :radius="4"
            :x-formatter="xFormatter"
            :y-formatter="yFormatter"
            :legend-position="LegendPosition.TopRight"
            :hide-legend="false"
            :y-grid-line="true"
          />
        </div>
      </section>
    </template>
   </UDashboardPanel>
</template>

<script setup lang="ts">
  const data = ref([
  {
    id: '4600',
    date: '2024-03-11T15:30:00',
    status: 'paid',
    email: 'james',
    amount: 594
  },
  {
    id: '4599',
    date: '2024-03-11T10:10:00',
    status: 'failed',
    email: 'mia',
    amount: 276
  },
  {
    id: '4598',
    date: '2024-03-11T08:50:00',
    status: 'refunded',
    email: 'william',
    amount: 315
  },
  {
    id: '4597',
    date: '2024-03-10T19:45:00',
    status: 'paid',
    email: 'emma',
    amount: 529
  },
  {
    id: '4596',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan',
    amount: 639
  },
  {
    id: '4599',
    date: '2024-03-10T19:45:00',
    status: 'paid',
    email: 'emma',
    amount: 529
  },
  {
    id: '4601',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan',
    amount: 639
  },
  {
    id: '4591',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan',
    amount: 639
  },
  {
    id: '4590',
    date: '2024-03-10T19:45:00',
    status: 'paid',
    email: 'emma',
    amount: 529
  },
  {
    id: '4589',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan',
    amount: 639
  }
])
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
