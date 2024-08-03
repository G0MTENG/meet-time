import styles from '@/styles/main/RowDateItem.module.css'

export default function RowItem({ date, day }) {
  return (
    <li className={styles.dateContainer}>
      <div>{day}</div>
      <div>{date}</div>
    </li>
  )
}
