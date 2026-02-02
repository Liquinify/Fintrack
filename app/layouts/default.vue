<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      collapsible
      resizable
      :ui="{ footer: 'border-t border-default' }"
      :toggle="{
        color: 'primary',
        variant: 'subtle',
        class: 'rounded-full',
      }"
    >
      <template #header="{ collapsed }">
        <div v-if="!collapsed" class="flex justify-start items-center">
          <h1>Fintrack</h1>
        </div>
        <h1 v-else>Fin</h1>
      </template>
      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="sidebarItems[0]"
          orientation="vertical"
          :ui="{
            link: 'mt-2 h-11',
          }"
        />
      </template>
      <!-- <template #footer="{ collapsed }">
        <UButton
          :avatar="{
            src: 'https://github.com/benjamincanac.png',
          }"
          :label="collapsed ? undefined : 'Benjamin'"
          color="neutral"
          variant="ghost"
          class="w-full h-12"
          :block="collapsed"
        />
      </template> -->
    </UDashboardSidebar>
    <slot />
  </UDashboardGroup>
</template>

<script setup lang="ts">
import { sidebarItems } from "~/constants/sidebar";
</script>

<style lang="scss" scoped></style>
