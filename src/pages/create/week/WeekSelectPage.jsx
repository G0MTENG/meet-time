import useGroupStore from '@/stores/groupStore'
import styles from '@/styles/create/DateSelectPage.module.css'
import DayBox from './DayBox'

export default function SelectWeek() {
  const week = ['월', '화', '수', '목', '금', '토', '일']
  const { weeks, setWeeks } = useGroupStore()

  return (
    <div className={styles.container}>
      {week.map((day, idx) => (
        <DayBox
          key={idx}
          isClicked={weeks[idx]}
          handleClick={setWeeks}
          index={idx}
        >
          {day}
        </DayBox>
      ))}
    </div>
  )
}
