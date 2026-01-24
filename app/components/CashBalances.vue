<template>
    <div class="space-y-4" >
        <UModal scrollable title="Add a new account" :close="{label: 'Готово', variant: 'ghost'}">
        <div class="flex justify-between items-start p-4 hover:opacity-80 transition-opacity hover:bg-gray-800/30">
            <div class="flex-1">
            <p class="text-sm mb-1">{{ cash.balanceName }}</p>
            <p class="text-xs" v-if="cash.isSavingsAccount">Savings Account</p>
            </div>
            <div class="text-right">
            <p class="text-lg font-semibold mb-1">{{ cash.balance }}</p>
            </div>
        </div>
        <template #body>
            <EditBalance :cash="cash" />
        </template>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import type { CashBalances } from '~/types/client-info';
import EditBalance from './modals/EditBalance.vue';

defineProps<{
    cash: CashBalances
}>();
</script>
