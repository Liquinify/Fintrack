import type { NavigationMenuItem } from "@nuxt/ui";

export const sidebarItems: NavigationMenuItem[][] = [
  [
    {
      label: "Home",
      icon: "i-lucide-house",
      to: "/",
    },
    {
      label: "Accounts",
      icon: "i-lucide-credit-card",
      to: "/accounts",
    },
    {
      label: "Transactions",
      icon: "i-lucide-arrow-left-right",
      to: "/transactions"
    },
    {
      label: "Goals",
      icon: "i-lucide-settings",
      defaultOpen: true,
      children: [
        {
          label: "General",
        },
        {
          label: "Members",
        },
        {
          label: "Notifications",
        },
      ],
    },
  ],
];
