import { type Transactions } from "~/types/types";

export function useTransactions(from: number) {
  const {
    data: userTransactions,
    pending: loading,
    error,
    refresh,
  } = useCustomFetch<Transactions[]>(`/personal/statement/${0}/${from}`);

  return {
    userTransactions,
    loading,
    error,
    refresh,
  };
}
