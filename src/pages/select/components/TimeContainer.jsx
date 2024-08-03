import styles from '@/styles/select/TimeContainer.module.css'

export default function TimeContainer({ labelItem, isSelected, handleClick }) {
  const { id, label } = labelItem
  return (
    <div
      className={`${styles.timeContainer} ${isSelected ? styles.timeClick : ''}`}
      onClick={() => handleClick(id)}
    >
      <p>{label}</p>
      <div />
    </div>
  )
}
