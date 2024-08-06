import { useColorStore } from '@/stores/colorStore'
import { useResultStore } from '@/stores/resultStore'
import styles from '@/styles/main/SelectInfo.module.css'

export default function SelectInfo({ label, rowNum, colNum, handleModalOpen }) {
  const { possibleList, meetingDayId } = useResultStore()
  const { colorList } = useColorStore()

  return (
    <ul className={styles.container}>
      {Array.from({ length: colNum }).map((_, colIdx) => (
        <li key={`col-${colIdx}`} className={styles.colItem}>
          {Array.from({ length: rowNum }).map((_, rowIdx) => (
            <div
              key={`row-${colIdx}-${rowIdx}`}
              className={styles.rowItem}
              onClick={() =>
                handleModalOpen(meetingDayId[rowIdx], label[colIdx].id)
              }
              style={{
                backgroundColor: `rgba(0, 0, 0, ${colorList[possibleList[meetingDayId[rowIdx]][colIdx]] / 100})`,
              }}
            />
          ))}
        </li>
      ))}
    </ul>
  )
}
