import moment from "moment";

export const useDailyBudget = () => {
  const todayState = useState("today", () => moment().startOf("day").unix());
  const { userTransactions: dailyTransactions } = useTransactions(
    todayState.value,
  );
  const totalBudget = ref(500);

  const dailyTransactionRecords = computed(() => {
    return (
      dailyTransactions.value
        ?.map((num) => num.amount)
        .filter((amount) => amount < 0)
        .reduce((acc, cur) => acc + cur, 0) || 0
    );
  }) as ComputedRef<number>;

  const percentage = computed(() => {
    return Math.round(
      (dailyTransactionRecords.value / totalBudget.value) * 100,
    );
  });

  const formattedCurrent = computed(() => {
    return (dailyTransactionRecords.value || 0).toLocaleString();
  });

  return { percentage, formattedCurrent, totalBudget, todayState };
};
