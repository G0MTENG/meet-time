import styles from '@/styles/select/TimeSelector.module.css'
import TimeContainer from './TimeContainer'

export default function TimeSelector({ timeLabels, possible, handleClick }) {
  return (
    <div className={styles.timeSelector}>
      {timeLabels.map(ele => {
        const isSelected = possible.includes(ele.id)
        return (
          <TimeContainer
            key={ele.id}
            labelItem={ele}
            isSelected={isSelected}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
