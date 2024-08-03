const week = ['일', '월', '화', '수', '목', '금', '토']
export const parseDateNDay = date => {
  if (!date) {
    console.log('date error')
    return
  }

  const dateObj = new Date(date)
  return [
    `${dateObj.getMonth()}월 ${dateObj.getDate()}일`,
    `${week[dateObj.getDay()]}요일`,
  ]
}
