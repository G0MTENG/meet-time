import styles from '@/styles/components/ColorItem.module.css'

export default function ColorItem({ color }) {
  const percent = color / 100

  const style = {
    backgroundColor: `rgba(0, 0, 0, ${percent})`,
  }

  return <div className={styles.item} style={style} />
}
