<template>
  <div class="grid grid-cols-2 gap-6 rounded-b-lg">
    <UButton
      class="flex flex-col items-center gap-3 p-6 cursor-pointer hover:opacity-80 transition-opacity bg-gray-800/30"
    >
      <div class="text-5xl">🏦</div>
      <div class="text-center">
        <h3 class="font-semibold text-white">Банк</h3>
        <p class="text-sm text-gray-400 mt-1">З синхронізацією</p>
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
      @click="handleMetamaskConnection"
      class="flex flex-col items-center gap-3 p-6 cursor-pointer hover:opacity-80 transition-opacity relative bg-gray-800/30"
    >
      <div class="text-5xl">₿</div>
      <div class="text-center">
        <h3 class="font-semibold text-white">Крипто валюта</h3>
        <p class="text-sm text-gray-400 mt-1">З синхронізацією</p>
      </div>
    </UButton>
    <UModal title="Додати готівку">
      <UButton
        class="flex flex-col items-center gap-3 p-6 cursor-pointer hover:opacity-80 transition-opacity bg-gray-800/30"
      >
        <div class="text-5xl">🏦</div>
        <div class="text-center">
          <h3 class="font-semibold text-white">Готівка</h3>
          <p class="text-sm text-gray-400 mt-1">Ручний облік</p>
        </div>
      </UButton>
      <template #body>
        <AddCash />
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import MetaMaskSDK from "@metamask/sdk";
import AddCash from "./AddCash.vue";

const emit = defineEmits<{ close: [boolean] }>();
const accountInfo = ref<string[]>([]);
const runtimeConfig = useRuntimeConfig();

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "Fintrack",
    url: window.location.href,
  },
  infuraAPIKey: runtimeConfig.public.infuraToken as string,
});

const provider = MMSDK.getProvider();

const accounts = await MMSDK.connect();
console.log("Connected account:", accounts[0]);

const result = await provider?.request({
  method: "eth_accounts",
  params: [],
});
console.log("eth_accounts result:", result);

async function handleMetamaskConnection() {
  try {
    const accounts = await MMSDK.connect();
    accountInfo.value = accounts;
    console.log("Connected accounts:", accountInfo.value);
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
  }
}

async function handleDisconnectMetamask() {
  try {
    await MMSDK.terminate();
    accountInfo.value = [];
  } catch (error) {
    console.error("Error disconnecting from MetaMask:", error);
  }
}
</script>

<style scoped lang="scss"></style>
