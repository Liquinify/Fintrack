<template>
    <UDashboardPanel>
      <template #header>
        <AppHeader />
        </template>
        <template #body>
            <main class="space-y-4">
                <!-- Filter Bar -->
                <div class="flex items-center justify-between gap-4 border rounded-2xl p-6">
                    <UTabs 
                        :items="tabs" 
                        :default-index="activeTab"
                        @change="activeTab = $event"
                    />
                    <div class="flex items-center gap-3">
                        <UPopover :popper="{ placement: 'bottom-start' }">
                            <UButton 
                                icon="i-heroicons-calendar"
                                variant="ghost"
                                :trailing="true"
                            >
                                {{ selectedMonth }}
                            </UButton>
                        </UPopover>
                        <UButton 
                            icon="i-heroicons-funnel"
                            variant="ghost"
                            @click="showFilters = !showFilters"
                        >
                            Filters
                        </UButton>
                        <UButton 
                            icon="i-heroicons-arrow-down-tray"
                            variant="ghost"
                            @click="exportData"
                        >
                            Export
                        </UButton>
                    </div>
                </div>
                <!-- Table -->
                <UTable :data="userTransactions" :columns="transactionColumns" />
            </main>
        </template>
    </UDashboardPanel>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import moment from 'moment';
import { ref } from 'vue';
import type { Transactions } from '~/types/client-info';

const prevMonth = moment().subtract(31, 'days').unix();
const {userTransactions} = useTransactions(prevMonth)

const activeTab = ref(0)
const showFilters = ref(false)
const selectedMonth = ref('This Month')

const tabs = [
    { label: 'All Transactions' },
    { label: 'Income' },
    { label: 'Expense' },
    { label: 'Pending' }
]

const transactionColumns: TableColumn<Transactions>[] = [
    {accessorKey: 'description', header: 'Description'},
    {accessorKey: 'amount', header: 'Amount'},
    {accessorKey: 'time', header: 'Date'},
    {id: 'action'}
]
    
const exportData = () => {
    console.log('Export data');
    // TODO: Implement export functionality
}
</script>

<style lang="scss" scoped>

</style>