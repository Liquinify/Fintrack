import type { NavigationMenuItem } from '@nuxt/ui'

export const sidebarItems: NavigationMenuItem[][] = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Accounts',
  icon: 'i-lucide-inbox',
}, {
  label: 'Analytics',
  icon: 'i-lucide-users'
}, {
  label: 'Goals',
  icon: 'i-lucide-settings',
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}]]