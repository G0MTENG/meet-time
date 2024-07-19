import styles from '@/styles/select/DayBox.module.css'

export default function DayBox({ children, isClicked, handleClick, index }) {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`${styles.box} ${isClicked ? styles.click : styles.notClick}`}
    >
      {children}요일
    </div>
  )
}
