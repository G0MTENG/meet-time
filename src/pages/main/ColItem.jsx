import styles from '@/styles/main/ColItem.module.css'

export default function ColItem({ children }) {
  return <li className={styles.item}>{children}</li>
}
