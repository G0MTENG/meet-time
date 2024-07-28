import styles from '@/styles/main/RowLabel.module.css'
import RowItem from './RowDateItem'

export default function RowLabelDate({ dates }) {
  return (
    <ul className={styles.container}>
      {dates.map((ele, idx) => {
        const [, _month, _date, _day] = ele.split('/')
        return <RowItem key={idx} month={_month} date={_date} day={_day} />
      })}
    </ul>
  )
}
