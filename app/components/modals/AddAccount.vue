<template>
  <div class="grid grid-cols-2 gap-6 rounded-b-lg">
    <UButton 
      class="flex flex-col items-center gap-3 p-6 cursor-pointer hover:opacity-80 transition-opacity bg-gray-800/30"
      @click="selectAccountType('bank')"
    >
      <div class="text-5xl">🏦</div>
      <div class="text-center">
        <h3 class="font-semibold text-white">Банк</h3>
        <p class="text-sm text-gray-400 mt-1">
          З синхронізацією
        </p>
      </div>
    </UButton>

    <!-- TODO: Maybe later -->
    <!-- <div 
      class="flex flex-col items-center gap-3 p-6 cursor-pointer hover:opacity-80 transition-opacity relative bg-gray-800/30"
      @click="selectAccountType('card')"
    >
      <div class="absolute top-2 right-2 bg-emerald-400 text-black text-xs font-semibold px-2 py-1 rounded">PRO</div>
      <div class="text-5xl">💳</div>
      <div class="text-center">
        <h3 class="font-semibold text-white">Кредитна карта</h3>
        <p class="text-sm text-gray-400 mt-1">
          Ручний облік
        </p>
      </div>
    </div> -->

    <UButton 
      class="flex flex-col items-center gap-3 p-6 cursor-pointer hover:opacity-80 transition-opacity relative bg-gray-800/30"
      @click="selectAccountType('crypto')"
    >
      <div class="text-5xl">₿</div>
      <div class="text-center">
        <h3 class="font-semibold text-white">Крипто валюта</h3>
        <p class="text-sm text-gray-400 mt-1">
          Ручний облік
        </p>
      </div>
    </UButton>

    <UModal title="Додати готівку" >
      <UButton 
        class="flex flex-col items-center gap-3 p-6 cursor-pointer hover:opacity-80 transition-opacity bg-gray-800/30"
      >
        <div class="text-5xl">🏦</div>
        <div class="text-center">
          <h3 class="font-semibold text-white">Готівка</h3>
          <p class="text-sm text-gray-400 mt-1">
            Ручний облік
          </p>
        </div>
      </UButton>
      <template #body>
        <AddCash />
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import AddCash from './AddCash.vue';

const emit = defineEmits<{ close: [boolean] }>()



const selectAccountType = (type: string) => {
  console.log('Selected account type:', type);
};

</script>

<style scoped lang="scss"></style>