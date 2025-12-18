<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar 
      collapsible 
      resizable 
      :ui="{ footer: 'border-t border-default' }"    
      :toggle="{
          color: 'primary',
          variant: 'subtle',
          class: 'rounded-full'
      }">
      <template #header="{ collapsed }">
        <h1 v-if="!collapsed" class="h-5 w-auto shrink-0">Logo</h1>
        <UIcon v-else name="i-simple-icons-nuxtdotjs" class="size-5 text-primary mx-auto" />
      </template>
      <template #default="{ collapsed }">
        <UButton
          :label="collapsed ? undefined : 'Search...'"
          icon="i-lucide-search"
          color="neutral"
          variant="outline"
          block
          :square="collapsed"
        >
          <template v-if="!collapsed" #trailing>
            <div class="flex items-center gap-0.5 ms-auto">
              <UKbd value="meta" variant="subtle" />
              <UKbd value="K" variant="subtle" />
            </div>
          </template>
        </UButton>
        <UNavigationMenu
          :collapsed="collapsed"
          :items="sidebarItems[0]"
          orientation="vertical"
        />
        <UNavigationMenu
          :collapsed="collapsed"
          :items="sidebarItems[1]"
          orientation="vertical"
          class="mt-auto"
        />
      </template>
      <template #footer="{ collapsed }">
        <UButton
          :avatar="{
            src: 'https://github.com/benjamincanac.png'
          }"
          :label="collapsed ? undefined : 'Benjamin'"
          color="neutral"
          variant="ghost"
          class="w-full h-12"
          :block="collapsed"
        />
      </template>
    </UDashboardSidebar>
    <slot />
  </UDashboardGroup> 
</template>

<script setup lang="ts">
import { sidebarItems } from '~/constants/sidebar';

</script>

<style lang="scss" scoped>

</style>