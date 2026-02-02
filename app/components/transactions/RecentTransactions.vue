<template>
  <UCard class="bg-[#16171D]">
    <div class="flex items-center justify-between mb-1.5">
      <h3 class="text-sm font-semibold">Recent Transactions</h3>
    </div>
    <div
      v-for="transaction in weeklyTransactions?.slice(0, 5)"
      :key="transaction.id"
      class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <div class="flex items-center gap-3 flex-1">
        <div class="flex-1">
          <p class="text-sm font-medium">{{ transaction.description }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            {{ formatTransactionsDate(transaction.time) }}
          </p>
        </div>
      </div>
      <div class="text-right">
        <p
          :class="transaction.amount > 0 ? 'text-green-600' : 'text-red-600'"
          class="text-sm font-semibold"
        >
          {{ handleCurrencyFormat(transaction.amount) }}
        </p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import moment from "moment";

const currentWeekState = useState("currentWeek", () =>
  moment().subtract(1, "week").unix(),
);
const { userTransactions: weeklyTransactions } = useTransactions(currentWeekState.value);
</script>
