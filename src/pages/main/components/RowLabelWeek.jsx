import styles from '@/styles/main/RowLabel.module.css'
import RowItem from '@/pages/main/components/RowWeekItem'
import { weekly } from '@/utils/dateHelper'

export default function RowLabelWeek({ weeks }) {
  const weekLabel = []
  weeks.forEach(ele => {
    weekLabel.push(weekly[ele])
  })

  return (
    <ul className={styles.container}>
      {weekLabel.map((ele, idx) => {
        return <RowItem key={idx}>{ele}</RowItem>
      })}
    </ul>
  )
}
