import styles from '@/styles/select/TimeSelector.module.css'
import TimeContainer from './TimeContainer'
import { timeLabel } from '@/utils/timeOptions'

export default function TimeSelector({
  timeLabels,
  possible,
  handleClick,
  end,
}) {
  const endLabel = timeLabel[timeLabel.findIndex(ele => ele.id === end)]
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
      <div className={styles.timeContainer}>
        <p>{endLabel.label}</p>
        <div></div>
      </div>
    </div>
  )
}
