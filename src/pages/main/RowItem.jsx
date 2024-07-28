import styles from '@/styles/main/RowItem.module.css'

export default function RowItem({ month, date, day }) {
  return (
    <li className={styles.dateContainer}>
      <div>{day}</div>
      <div>
        {month}월 {date}일
      </div>
    </li>
  )
}
