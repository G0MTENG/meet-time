import styles from '@/styles/components/ColorBar.module.css'
import ColorItem from './ColorItem'

export default function ColorBar({ numOfGroupPeople }) {
  const unit = 100 / (numOfGroupPeople - 1)

  return (
    <div className={styles.palette}>
      <div className={styles.left}>{`0/${numOfGroupPeople}`}</div>
      <div
        className={styles.right}
      >{`${numOfGroupPeople}/${numOfGroupPeople}`}</div>
      {Array.from({ length: numOfGroupPeople }).map((_, idx) => (
        <ColorItem key={idx} color={(unit * idx) / 100} />
      ))}
    </div>
  )
}
