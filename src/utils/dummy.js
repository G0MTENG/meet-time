const DUMMY = [
  {
    id: 0,
    date: '7월 22일',
    day: '월요일',
    times: Array(14).fill(0),
  },
  {
    id: 0,
    date: '7월 22일',
    day: '월요일',
    times: Array(14).fill(0),
  },
  {
    id: 0,
    date: '7월 22일',
    day: '월요일',
    times: Array(14).fill(0),
  },
  {
    id: 1,
    date: '7월 23일',
    day: '화요일',
    times: Array(14).fill(0),
  },
  {
    id: 2,
    date: '7월 24일',
    day: '수요일',
    times: Array(14).fill(0),
  },
  {
    id: 3,
    date: '7월 25일',
    day: '목요일',
    times: Array(14).fill(0),
  },
  {
    id: 4,
    date: '7월 26일',
    day: '금요일',
    times: Array(14).fill(0),
  },
  {
    id: 5,
    date: '7월 27일',
    day: '토요일',
    times: Array(14).fill(0),
  },
  {
    id: 6,
    date: '7월 28일',
    day: '일요일',
    times: Array(14).fill(0),
  },
  {
    id: 7,
    date: '7월 29일',
    day: '월요일',
    times: Array(14).fill(0),
  },
  {
    id: 8,
    date: '7월 30일',
    day: '화요일',
    times: Array(14).fill(0),
  },
]

const createTimes = (start, end) => {
  const times = []
  const [startHour, startMin] = start.split(':').map(e => +e)
  const [endHour, endMin] = end.split(':').map(e => +e)

  let h = startHour
  for (; h < endHour; ++h) {
    times.push(`${h}:00`)
    times.push(`${h}:30`)
  }

  if (startMin === 30) {
    times.shift()
  }

  if (endMin === 30) {
    times.push(`${h}:00`)
  }

  return times
}

export { DUMMY, createTimes }
