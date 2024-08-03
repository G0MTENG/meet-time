import { parseDateNDay } from '@/utils/parseDateNDay'
import DateContainer from './DateContainer'
import styles from '@/styles/select/DateSelector.module.css'

export default function DateSelector({ meetingList, index, handleClick }) {
  return (
    <div className={styles.dateSelector}>
      {meetingList.map((ele, idx) => {
        const [_date, _day] = parseDateNDay(ele)
        const isActive = index === idx
        return (
          <DateContainer
            key={idx}
            isActive={isActive}
            handleClick={handleClick}
            date={_date}
            day={`${_day}요일`}
            idx={idx}
          />
        )
      })}
    </div>
  )
}
