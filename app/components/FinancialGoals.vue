<template>
  <UCard class="border-none">
    <div class="flex items-start justify-between mb-6">
      <div>
        <h3 class="text-xl font-bold">Rainy Day Fund</h3>
        <p class="text-sm">Savings Goal</p>
      </div>
      <div class="p-2">
        <UIcon name="i-heroicons-currency-dollar" class="w-6 h-6" />
      </div>
    </div>
    <div class="flex items-end justify-between mb-1.5">
      <div class="text-3xl font-bold">$8,240</div>
      <div class="text-sm font-medium mb-2">Goal: $10k</div>
    </div>
    <UProgress v-model="percentage" status :max="100" />
  </UCard>
</template>

<script setup lang="ts">
const percentage = ref(82.4);
</script>
