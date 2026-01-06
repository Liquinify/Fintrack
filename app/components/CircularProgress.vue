<template>
  <UCard class="flex flex-col items-center">
    <h3 class="text-sm font-semibold mb-4 self-start">Daily Limit</h3>
    <div class="relative inline-flex items-center justify-center">
      <svg class="transform -rotate-90" :width="200" :height="200">
        <circle
          :cx="200 / 2"
          :cy="200 / 2"
          :r="radius"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
          class="text-gray-200"
        />
        <circle
          :cx="200 / 2"
          :cy="200 / 2"
          :r="radius"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          class="text-primary transition-all duration-300"
        />
      </svg>
      <div class="absolute text-center">
        <div class="text-2xl font-bold">
          ${{ Math.abs(currentTodaySpending) }}
        </div>
        <div class="text-xs text-gray-500">
          of ${{ dailyLimitSpending }} limit
        </div>
      </div>
    </div>
    <USeparator class="w-full mt-8" />
    <div class="w-full flex justify-around mt-4">
      <div class="text-center">
        <h3
          class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2"
        >
          Spent
        </h3>
        <span class="text-lg font-bold"
          >${{ Math.abs(currentTodaySpending) }}</span
        >
      </div>
      <div class="text-center">
        <h3
          class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2"
        >
          Limit
        </h3>
        <span class="text-lg font-bold text-green-500"
          >${{ remainingBalance }}</span
        >
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import moment from "moment";

const today = moment().startOf("day").unix();
const { userTransactions: dailyTransactions } = useTransactions(today);
const dailyLimitSpending = shallowRef(50000);
const todaysSpending = ref(dailyTransactions);

const currentTodaySpending = computed<any>(() => {
  return todaysSpending.value
    ?.map((num) => num.amount)
    .reduce((acc, cur) => acc + cur, 0);
});
const remainingBalance = computed(() => {
  return dailyLimitSpending.value + currentTodaySpending.value;
});
const percentage = computed(() => {
  return (currentTodaySpending.value / dailyLimitSpending.value) * 100;
});

const radius = computed(() => (200 - 8) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const dashOffset = computed(
  () =>
    circumference.value -
    (Math.min(percentage.value, 100) / 100) * circumference.value,
);
</script>
