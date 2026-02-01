import moment from "moment";

export const formatTransactionsDate = (timestamp: number) => {
  const date = moment(timestamp).format("dddd Do MMMM")
  return date;
}

export const handleCurrencyFormat = (currency: number) => {
  return currency.toString().slice(0, currency.toString().length - 2)
}
