const weekly = ['일', '월', '화', '수', '목', '금', '토', '일']

const parseDate = date => {
  let dateString = `${date.getMonth() + 1}월 ${date.getDate()}일`
  const day = date.getDay()

  return [dateString, weekly[day]]
}

export { parseDate }
