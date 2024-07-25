import styles from '@/styles/components/Button.module.css'

export default function Button({ children }) {
  return <div className={styles.loginbutton}>{children}</div>
}
