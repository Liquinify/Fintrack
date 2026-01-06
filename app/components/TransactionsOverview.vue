<template>
  <UCard>
    <!-- Header with title and toggle -->
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold">Transactions Overview</h3>
      <div class="flex gap-2">
        <UButton
          :variant="activeTab === 'weekly' ? 'soft' : 'ghost'"
          size="sm"
          @click="activeTab = 'weekly'"
        >
          • Weekly
        </UButton>
        <UButton
          :variant="activeTab === 'monthly' ? 'soft' : 'ghost'"
          size="sm"
          @click="activeTab = 'monthly'"
        >
          Monthly
        </UButton>
      </div>
    </div>

    <!-- Amount and growth -->
    <div class="mb-6">
      <div class="flex items-end gap-2">
        <h2 class="text-4xl font-bold">$35,687.03</h2>
        <span class="text-green-500 text-sm font-medium mb-1">+4.9%</span>
      </div>
    </div>
    <div class="flex gap-3 mb-6">
      <div class="flex items-center gap-2">
        <div
          class="w-3 h-3 rounded-full"
          style="background-color: #06b6d4"
        ></div>
        <span class="text-sm text-gray-400">Earning</span>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="w-3 h-3 rounded-full"
          style="background-color: #ec4899"
        ></div>
        <span class="text-sm text-gray-400">Spending</span>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="w-3 h-3 rounded-full"
          style="background-color: #8b5cf6"
        ></div>
        <span class="text-sm text-gray-400">Savings</span>
      </div>
    </div>

    <!-- Chart -->
    <BarChart
      :data="dailySpendings"
      :stacked="true"
      :height="250"
      :categories="RevenueCategoriesMultple"
      :y-axis="['earning', 'spending', 'savings']"
      :group-padding="0.5"
      :bar-padding="0.2"
      :x-num-ticks="7"
      :radius="4"
      :x-formatter="xFormatter"
      :y-formatter="yFormatter"
      :hide-legend="true"
      :y-grid-line="true"
    />
  </UCard>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref("weekly");

const monthlySpendings = [
  { month: "Jan", earning: 8000, spending: 10000, savings: 5000 },
  { month: "Feb", earning: 7500, spending: 9500, savings: 4500 },
  { month: "Mar", earning: 8200, spending: 10200, savings: 5200 },
  { month: "Apr", earning: 9000, spending: 11000, savings: 6000 },
  { month: "May", earning: 9500, spending: 11500, savings: 6500 },
  { month: "Jun", earning: 8800, spending: 10800, savings: 5800 },
  { month: "Jul", earning: 12000, spending: 10500, savings: 8000 },
  { month: "Aug", earning: 8500, spending: 9500, savings: 5500 },
  { month: "Sep", earning: 7800, spending: 9800, savings: 4800 },
  { month: "Oct", earning: 8600, spending: 10600, savings: 5600 },
  { month: "Nov", earning: 9200, spending: 11200, savings: 6200 },
  { month: "Dec", earning: 9800, spending: 11800, savings: 6800 },
];

const dailySpendings = [
  { day: "Mon", earning: 300, spending: 400, savings: 200 },
  { day: "Tue", earning: 350, spending: 450, savings: 250 },
  { day: "Wed", earning: 320, spending: 420, savings: 220 },
  { day: "Thu", earning: 400, spending: 500, savings: 300 },
  { day: "Fri", earning: 450, spending: 550, savings: 350 },
  { day: "Sat", earning: 380, spending: 480, savings: 280 },
  { day: "Sun", earning: 420, spending: 520, savings: 320 },
];

const xFormatter = (i: number): string => `${monthlySpendings[i]?.month}`;
const yFormatter = (tick: number) => {
  if (tick >= 1000) {
    return `${(tick / 1000).toFixed(0)}k`;
  }
  return tick.toString();
};

const RevenueCategoriesMultple = {
  earning: { name: "Earning", color: "#06b6d4" },
  spending: { name: "Spending", color: "#ec4899" },
  savings: { name: "Savings", color: "#8b5cf6" },
};
</script>

<style lang="scss" scoped></style>
