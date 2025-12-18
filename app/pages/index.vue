<template>
  <UDashboardPanel id="home">
    <template #header>
      <AppHeader />
    </template>

    <template #body>
      <main class="grid grid-cols-12 gap-6">
        <section class="col-span-12 xl:col-span-8 space-y-6">
          <!-- Top stats -->
          <DashboardStats :range="range" :period="period" />

          <!-- Spending / Revenue chart -->
          <UCard>
            <BarChart
              :data="RevenuesData"
              :stacked="true"
              :height="320"
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

          <!-- Recent transactions -->
          <UCard>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-semibold">Recent Transactions</h3>
              <UButton variant="ghost" size="xs">View all</UButton>
            </div>

            <UTable :data="data" />
          </UCard>
        </section>

        <!-- RIGHT COLUMN -->
        <aside class="col-span-12 xl:col-span-4 space-y-6">
          <!-- Daily limit -->
          <UCard class="flex flex-col items-center">
            <h3 class="text-sm font-semibold mb-4 self-start">
              Daily Limit
            </h3>

            <DonutChart
              :data="DonutData"
              :height="260"
              :categories="categories"
              :hide-legend="true"
              :radius="100"
              :arc-width="20"
            >
              <div class="text-center">
                <div class="text-xl font-semibold">$145</div>
                <div class="text-xs text-muted">of $200 limit</div>
              </div>
            </DonutChart>
            <USeparator class="mt-8"/>
            <div class="flex justify-around mt-4">
              <div>
                <h3>Spent</h3>
                <span>$145.20</span>
              </div>
              <div>
                <h3>Remaining</h3>
                <span>$54.80</span>
              </div>
            </div>
          </UCard>

          <!-- Financial goals -->
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

          <!-- Credit cards -->
          <UCard class="space-y-4">
            <h3 class="text-sm font-semibold">Credit Cards</h3>

            <div class="space-y-3">
              <UCard
                v-for="card in clientData?.accounts"
                :key="card.id"
                class="p-3 mt-2"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-xs uppercase text-muted">
                      {{ card.type }}
                    </p>
                    <p class="text-lg font-semibold">
                      ${{ card.balance }}
                    </p>
                  </div>

                  <span class="text-xs text-muted">
                    {{ card.maskedPan[0] }}
                  </span>
                </div>
              </UCard>
            </div>
          </UCard>
        </aside>
      </main>
    </template>
  </UDashboardPanel>
</template>


<script setup lang="ts">
import DashboardStats from '~/components/DashboardStats.vue'
import type { Period, Range } from '~/types/client-info'
import { useClientInfo } from '@/composables/useClientInfo'

const { clientData, error, loading } = useClientInfo()
console.log(clientData)
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
  }
])

const DonutData = ref([65, 35])

const labels = [
  { name: 'Chrome', color: 'var(--color-primary-400)' },
  { name: 'Safari', color: 'var(--color-indigo-400)' },
  { name: 'Edge', color: 'var(--color-sky-400)' },
  { name: 'Firefox', color: 'var(--color-orange-400)' },
  { name: 'Brave', color: 'var(--color-lime-400)' },
]

const categories: Record<string, BulletLegendItemInterface> =
  Object.fromEntries(
    labels.map((i) => [i.name, { name: i.name, color: i.color }]),
  )

const range = shallowRef<Range>({
  start: new Date(),
  end: new Date()
})
const period = ref<Period>('daily')

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

const statusData = computed(() => {
  const statusHistory = Array.from({ length: 300 }, () => ({
    status: 'online',
  }))
  statusHistory[250]!.status = 'offline'
  return statusHistory
})
</script>


<style lang="scss" scoped>

</style>
