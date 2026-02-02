import type { TableColumn } from "@nuxt/ui";
import type { Transactions } from "~/types/types";

export const transactionColumns: TableColumn<Transactions>[] = [
  { accessorKey: "description", header: "Description" },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return handleCurrencyFormat(row.original.amount);
    },
  },
  {
    accessorKey: "time",
    header: "Date",
    cell: ({ row }) => {
      return formatTransactionsDate(row.original.time);
    },
  },
];