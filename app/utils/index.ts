import moment from "moment";

export const formatTransactionsDate = (timestamp: number) => {
  const date = moment(timestamp).format("Do MMMM h:mm ");
  return date;
};

export const handleCurrencyFormat = (currency: number) => {
  return currency.toString().slice(0, currency.toString().length - 2);
};
