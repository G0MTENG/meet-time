import styles from '@/styles/select/DateContainer.module.css'
import { IoIosArrowForward } from 'react-icons/io'

export default function DateContainer({
  date,
  day,
  isActive,
  idx,
  handleClick,
}) {
  return (
    <div
      className={`${styles.dateContainer} ${isActive ? styles.dateClick : ''}`}
      onClick={() => handleClick(idx)}
    >
      <h5>{date}</h5>
      <p>{day}</p>
      {isActive && <IoIosArrowForward className={styles.icon} />}
    </div>
  )
}
