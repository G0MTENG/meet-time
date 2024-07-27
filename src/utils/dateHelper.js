const weekly = ['일', '월', '화', '수', '목', '금', '토', '일']

const getYearMonthDate = date => {
  const year = date.getYear() + 1900
  return [year, date.getMonth() + 1, date.getDate()]
}

const getMonthDate = date => {
  return [date.getMonth() + 1, date.getDate()]
}

const getMonthDateDay = date => {
  return [date.getMonth() + 1, date.getDate(), weekly[date.getDay()]]
}

export { getYearMonthDate, getMonthDate, getMonthDateDay }
