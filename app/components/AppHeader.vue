<template>
  <UHeader>
    <template #left>
      <UDashboardSidebarCollapse /> 
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <USeparator class="my-6" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const route = useRoute()

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

