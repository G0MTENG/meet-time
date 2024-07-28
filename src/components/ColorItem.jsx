import styles from '@/styles/components/ColorItem.module.css'

export default function ColorItem({ color }) {
  const style = {
    backgroundColor: `rgba(0, 0, 0, ${color})`,
  }

  return <div className={styles.item} style={style} />
}
