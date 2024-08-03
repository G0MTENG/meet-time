import styles from '@/styles/main/RowWeekItem.module.css'

export default function RowItem({ children }) {
  return <li className={styles.weekContainer}>{children}</li>
}
