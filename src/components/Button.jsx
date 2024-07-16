import styles from '@/styles/components/Button.module.css'

export default function Button({ children, handleClick }) {
  return (
    <div className={styles.button} onClick={handleClick}>
      {children}
    </div>
  )
}
