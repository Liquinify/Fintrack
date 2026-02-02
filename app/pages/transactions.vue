<template>
  <UDashboardPanel>
    <template #header>
      <AppHeader />
    </template>
    <template #body>
      <main class="space-y-4">
        <UCard class="dark:bg-[#16171D]">
          <UTable
            ref="table"
            :data="userTransactions"
            :columns="transactionColumns"
            v-model:pagination="pagination"
            :pagination-options="{
              getPaginationRowModel: getPaginationRowModel(),
            }"
          />
        </UCard>
        <div class="flex justify-end pt-4 px-4">
          <UPagination
            :page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
            :items-per-page="table?.tableApi?.getState().pagination.pageSize"
            :total="table?.tableApi?.getFilteredRowModel().rows.length"
            @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
          />
        </div>
      </main>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import moment from "moment";
import { getPaginationRowModel } from "@tanstack/vue-table";
import { transactionColumns } from "~/constants/transaction-columns";

const table = useTemplateRef("table");

const pagination = ref({
  pageIndex: 0,
  pageSize: 8,
});

const prevMonthState = useState("prevMonth", () =>
  moment().subtract(31, "days").unix(),
);
const { userTransactions } = useTransactions(prevMonthState.value);
</script>
