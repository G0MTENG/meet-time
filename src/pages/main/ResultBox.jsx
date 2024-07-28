import styles from '@/styles/main/ResultBox.module.css'
import RowLabel from '@/pages/main/RowLabel'
import ColLabel from '@/pages/main/ColLabel'

export default function ResultBox() {
  return (
    <div className={styles.container}>
      <div></div>
      <RowLabel />
      <ColLabel />
      <div></div>
    </div>
  )
}
