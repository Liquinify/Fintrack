<template>
  <UHeader class="border-none">
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
import AddAccount from './modals/AddAccount.vue';

const route = useRoute();

// const items = computed(() => [{
//   label: 'Docs',
//   to: '/docs',
//   active: route.path.startsWith('/docs')
// }, {
//   label: 'Pricing',
//   to: '/pricing'
// }, {
//   label: 'Blog',
//   to: '/blog'
// }, {
//   label: 'Changelog',
//   to: '/changelog'
// }])
</script>
