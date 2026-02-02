<template>
  <UHeader class="border-none static">
    <template #left>
      <UDashboardSidebarCollapse />
    </template>
    <template #right>
      <UModal title="Add a new account">
        <UButton label="New" color="success" icon="i-lucide-plus" />
        <template #body>
          <AddAccount />
        </template>
      </UModal>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import AddAccount from "./modals/AddAccount.vue";
</script>
