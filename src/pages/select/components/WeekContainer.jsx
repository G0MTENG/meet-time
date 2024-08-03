import styles from '@/styles/select/WeekContainer.module.css'
import { IoIosArrowForward } from 'react-icons/io'

export default function WeekContainer({ isActive, week, handleClick, idx }) {
  return (
    <div
      className={`${styles.weekContainer} ${isActive ? styles.dateClick : ''}`}
      onClick={() => handleClick(idx)}
    >
      <h5>{week}</h5>
      {isActive && <IoIosArrowForward className={styles.icon} />}
    </div>
  )
}
