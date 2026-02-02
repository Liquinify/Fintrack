<template>
  <UCard class="bg-[#16171D]">
    <div>
      <div class="flex justify-between items-start mb-4">
        <div>
          <h2 class="text-xl font-semibold text-white m-0">Daily Spendings</h2>
          <p class="text-sm text-gray-500 mt-1.5 m-0">
            {{ moment().format("MMMM Do YYYY") }}
          </p>
        </div>
        <UModal>
          <UButton icon="i-heroicons-plus" color="primary" size="lg">
            Set Daily Budget
          </UButton>
          <template #content>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-4">Set Daily Budget</h3>
              <UInput
                v-model="totalBudget"
                label="Daily Budget Amount"
                type="number"
                placeholder="Enter amount"
                class="mb-4"
              />
            </div>
          </template>
        </UModal>
      </div>
      <div>
        <div class="flex flex-row justify-between items-center gap-7">
          <div class="flex-1">
            <div class="flex items-baseline gap-1 mb-4">
              <span class="text-xl font-bold text-white"
                >${{ formattedCurrent }}</span
              >
              <span class="text-xl text-gray-500 font-normal"
                >/ ${{ totalBudget }}</span
              >
            </div>
            <div>
              <UProgress v-model="percentage" :max="100" class="mb-2" />
              <div class="flex justify-between text-sm text-gray-400">
                <p class="m-0">{{ percentage }}% of daily limit</p>
                <p class="m-0">${{ totalBudget }} remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import moment from "moment";
import { useDailyBudget } from "~/composables/useDailyBudget";

const { percentage, formattedCurrent, totalBudget } = useDailyBudget();
</script>
