import styles from '@/styles/main/ColLabel.module.css'
import ColItem from './ColItem'

export default function ColLabel({ label }) {
  return (
    <ul className={styles.container}>
      {label &&
        label.map((ele, idx) => {
          return <ColItem key={idx}>{ele.label}</ColItem>
        })}
    </ul>
  )
}
