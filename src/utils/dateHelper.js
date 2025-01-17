import { timeLabel } from './timeOptions'
const weekly = ['', '월', '화', '수', '목', '금', '토', '일']

const getDate = date => {
  const year = date.getYear() + 1900
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return [year, month, day]
}

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

const getTimeLabel = (start, end) => {
  return timeLabel.filter(ele => ele.id >= start && ele.id <= end)
}

export {
  weekly,
  getYearMonthDate,
  getMonthDate,
  getMonthDateDay,
  getTimeLabel,
  getDate,
}
