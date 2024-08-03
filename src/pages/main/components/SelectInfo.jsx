import styles from '@/styles/main/SelectInfo.module.css'

export default function SelectInfo({ rowNum, colNum, handleModalOpen }) {
  return (
    <ul className={styles.container}>
      {Array.from({ length: colNum }).map((_, colIdx) => (
        <li key={`col-${colIdx}`} className={styles.colItem}>
          {Array.from({ length: rowNum }).map((_, rowIdx) => (
            <div
              key={`row-${colIdx}-${rowIdx}`}
              className={styles.rowItem}
              onClick={() => handleModalOpen(rowIdx, colIdx)}
            />
          ))}
        </li>
      ))}
    </ul>
  )
}
