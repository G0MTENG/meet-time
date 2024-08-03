import styles from '@/styles/main/RowLabel.module.css'
import RowItem from './RowDateItem'
import { parseDateNDay } from '@/utils/parseDateNDay'

export default function RowLabelDate({ dates }) {
  return (
    <ul className={styles.container}>
      {dates.map((ele, idx) => {
        const [_date, _day] = parseDateNDay(ele)
        return <RowItem key={idx} date={_date} day={_day} />
      })}
    </ul>
  )
}
