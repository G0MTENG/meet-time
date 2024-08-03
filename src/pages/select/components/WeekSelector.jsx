import styles from '@/styles/select/WeekSelector.module.css'
import WeekContainer from './WeekContainer'

const weeks = ['', '월', '화', '수', '목', '금', '토', '일']

export default function WeekSelector({ meetingList, index, handleClick }) {
  return (
    <div className={styles.weekSelector}>
      {meetingList.map((ele, idx) => {
        const isActive = index === idx
        return (
          <WeekContainer
            key={idx}
            isActive={isActive}
            week={`${weeks[ele]}요일`}
            handleClick={handleClick}
            idx={idx}
          />
        )
      })}
    </div>
  )
}
