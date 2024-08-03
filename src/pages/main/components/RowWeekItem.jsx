import styles from '@/styles/main/RowWeekItem.module.css'

export default function RowItem({ day }) {
  return <li className={styles.weekContainer}>{day}</li>
}
