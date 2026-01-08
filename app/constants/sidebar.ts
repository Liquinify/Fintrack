import type { NavigationMenuItem } from "@nuxt/ui";

export const sidebarItems: NavigationMenuItem[][] = [
  [
    {
      label: "Dashboard",
      icon: "i-lucide-layout-dashboard",
      to: "/",
    },
    {
      label: "Accounts",
      icon: "i-lucide-credit-card",
      to: "/accounts",
    },
    {
      label: "Transactions",
      icon: "i-lucide-wallet",
      to: "/transactions"
    },
    {
      label: "Budgeting",
      icon: "i-lucide-circle-dollar-sign",
      to: "/budgeting"
    }
    // {
    //   label: "Goals",
    //   icon: "i-lucide-settings",
    //   defaultOpen: true,
    //   children: [
    //     {
    //       label: "General",
    //     },
    //     {
    //       label: "Members",
    //     },
    //     {
    //       label: "Notifications",
    //     },
    //   ],
    // },
  ],
];
