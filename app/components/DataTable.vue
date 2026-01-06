<template>
  <UCard class="">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-sm font-semibold">Recent Transactions</h3>
    </div>
    <div class="space-y-3">
      <div
        v-for="transaction in weeklyTransactions?.slice(0, 5)"
        :key="transaction.id"
        class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div class="flex items-center gap-3 flex-1">
          <div
            class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path
                  d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                />
              </g>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium">{{ transaction.description }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ formatTransactionsDate(transaction.time) }}
            </p>
          </div>
        </div>
        <div class="text-right">
          <p
            :class="[
              'text-sm font-semibold',
              transaction.amount > 0 ? 'text-green-600' : 'text-red-600',
            ]"
          >
            {{ transaction.amount > 0 ? "+" : "-"
            }}{{
              Math.abs(transaction.amount).toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              })
            }}
          </p>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import moment from "moment";

const currentWeek = moment().subtract(1, "week").unix();
const { userTransactions: weeklyTransactions } = useTransactions(currentWeek);
</script>

<style lang="scss" scoped></style>
