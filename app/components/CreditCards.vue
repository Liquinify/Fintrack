<template>
    <UCard class="space-y-4">
       <h3 class="text-sm font-semibold">Credit Cards</h3>
       <div class="space-y-3 mt-2">
         <div
           v-for="card in clientData?.accounts"
           :key="card.id"
           class="bg-linear-to-br from-slate-800 to-slate-900 rounded-lg p-6 text-white space-y-6"
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
             <p class="text-xl font-bold">{{ card.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} {{ card.cashbackType }}</p>
           </div>
         </div>
       </div>
    </UCard>
</template>

<script setup lang="ts">
const { clientData } = useClientInfo()

</script>

<style scoped lang="scss">

</style>