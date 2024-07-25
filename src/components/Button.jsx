import styles from '@/styles/components/Button.module.css'

export default function Button({ children, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  )
}
