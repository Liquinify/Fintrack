<template>
  <UCard
    class="space-y-4 bg-linear-to-br from-black/40 to-black/50 backdrop-blur-sm"
  >
    <h3 class="text-sm font-semibold">Credit Cards</h3>
    <div class="overflow-x-auto mt-2">
      <div class="flex gap-4">
        <div
          v-for="card in clientData?.accounts"
          :key="card.id"
          class="border rounded-lg p-4 text-white space-y-6 shrink-0 w-65 border-white/10"
        >
          <div class="flex justify-between items-start">
            <div>
              <p class="text-xs text-gray-400 mb-1">{{ card.type }}</p>
              <p class="text-lg font-semibold">{{ card.maskedPan[0] }}</p>
            </div>
            <div class="text-right">
              <p class="text-xs text-gray-400 mb-1">Expire</p>
              <p class="text-lg font-semibold">04/26</p>
            </div>
          </div>
          <div>
            <p class="text-xs text-gray-400 mb-2">Available balance</p>
            <p class="text-xl font-bold">
              {{ card.balance.toLocaleString("en-US") }} {{ card.cashbackType }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { clientData } = useClientInfo();
</script>

<style scoped lang="scss"></style>
