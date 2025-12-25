import moment from "moment"

export const formatTransactionsDate = (timestamp: number) => {
  const date = moment(timestamp).local()
  const today = moment().local().startOf('day')
  const yesterday = moment().local().subtract(1, 'day').startOf('day')

  if (date.isSame(today, 'day')) {
    return `Today, ${date.format('h:mm A')}`
  } else if (date.isSame(yesterday, 'day')) {
    return 'Yesterday'
  } else {
    return date.format('MMM D, YYYY')
  }
}