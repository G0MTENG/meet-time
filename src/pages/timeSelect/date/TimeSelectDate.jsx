import styles from '@/styles/timeSelect/TimeSelectDate.module.css'
import { DUMMY, createTimes } from '@/utils/dummy'
import { useEffect, useState } from 'react'

export default function TimeSelectDate() {
  const timeLabels = createTimes('9:00', '16:00')
  const [date, setDate] = useState(0)
  const [times, setTimes] = useState(DUMMY[0].times)

  useEffect(() => {
    const dateTimes = DUMMY[date].times
    setTimes(...dateTimes)
  }, [date])

  const handleDateClick = idx => {
    DUMMY[date].times = [...times]
    setDate(idx)
  }

  const handleTimeClick = idx => {
    const copyTimes = [...times]
    copyTimes[idx] === 0 ? 1 : 0
    setTimes(...copyTimes)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.dateSelector}>
        {DUMMY.map((ele, idx) => {
          return (
            <div
              key={ele.id}
              className={`${styles.dateContainer} ${date === idx ? styles.dateClick : ''}`}
              onClick={() => handleDateClick(idx)}
            >
              <h5>{ele.date}</h5>
              <p>{ele.day}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.timeSelector}>
        {timeLabels.map((label, idx) => {
          return (
            <div
              key={idx}
              className={`${styles.timeContainer} ${times[idx] === 1 ? styles.timeClick : ''}`}
              onClick={handleTimeClick}
            >
              <p>{label}</p>
              <div></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
