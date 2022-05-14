const formatDate = (date: string) => {
  const year = new Date(date).getFullYear()
  const month = new Date(date).getMonth() as 0|1|2|3|4|5|6|7|8|9|10|11
  const day = new Date(date).getDate()
  const MonthMap = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  return `${MonthMap[month]} ${day}, ${year}`
}

export default formatDate
