import styles from '@/styles/components/ColorBar.module.css'
import ColorItem from './ColorItem'
import { useColorStore } from '@/stores/colorStore'
import { useEffect } from 'react'

export default function ColorBar({ numOfGroupPeople = 1 }) {
  const { colorList, setColorList } = useColorStore()
  const unit = 100 / (numOfGroupPeople + 1) // 각 구간의 크기

  useEffect(() => {
    const colors = Array.from({ length: numOfGroupPeople + 1 }, (_, idx) =>
      Math.round(unit * (idx + 1)),
    )
    setColorList(colors)
  }, [numOfGroupPeople])

  return (
    <div className={styles.palette}>
      <div className={styles.left}>{`0/${numOfGroupPeople}`}</div>
      <div
        className={styles.right}
      >{`${numOfGroupPeople}/${numOfGroupPeople}`}</div>
      {colorList.map((color, idx) => (
        <ColorItem key={idx} color={color} />
      ))}
    </div>
  )
}
