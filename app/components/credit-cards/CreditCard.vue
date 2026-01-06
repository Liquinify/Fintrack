<template>
    <div
      class="bg-[#1d1e22] rounded-4xl p-4 text-white space-y-3 shadow-lg h-50 flex flex-col justify-between"
    >
      <div class="flex justify-between items-start">
        <p class="text-sm font-semibold">Mono {{ card.type }}</p>
        <span class="text-2xl">VISA</span>
      </div>
      <div>
        <p class="text-lg font-mono tracking-widest">
          {{ card.maskedPan[0] }}
        </p>
      </div>
      <div class="flex justify-between">
        <div>
          <p class="text-xs text-emerald-100 mb-1">CARD HOLDER</p>
          <p class="text-sm text-emerald-100 mb-2">
            {{ clientData?.name }}
          </p>
        </div>        
        <div>
          <p class="text-xs text-emerald-100 mb-1">CVV</p>
          <p class="text-sm font-semibold">•••</p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">


defineProps<{
  card: {
    id: string;
    balance: number;
    cashbackType: string;
    maskedPan: [string];
    type: string;
  };
}>();

const { clientData } = useClientInfo();
</script>

<style lang="scss" scoped>

</style>