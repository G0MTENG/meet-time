import styles from '@/styles/main/RowLabel.module.css'
import RowItem from './RowItem'

export default function RowLabel() {
  return (
    <ul className={styles.container}>
      <RowItem month={7} date={22} day={'월'} />
      <RowItem month={7} date={23} day={'화'} />
      <RowItem month={7} date={24} day={'수'} />
      <RowItem month={7} date={25} day={'목'} />
      <RowItem month={7} date={26} day={'금'} />
      <RowItem month={7} date={27} day={'토'} />
      <RowItem month={7} date={28} day={'일'} />
      <RowItem month={7} date={29} day={'월'} />
      <RowItem month={7} date={30} day={'화'} />
    </ul>
  )
}
