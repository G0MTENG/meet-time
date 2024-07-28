import styles from '@/styles/main/SelectInfo.module.css'

export default function SelectInfo({ rowNum, colNum }) {
  const rowArr = []
  const colArr = []
  for (let i = 0; i < rowNum; ++i) {
    rowArr.push('1fr')
  }

  for (let i = 0; i < colNum; ++i) {
    colNum.push('1fr')
  }

  const style = {
    gridTemplateRows: rowArr.join(' '),
    gridTemplateColumns: colArr.join(' '),
  }

  return <main className={styles.container} style={style}></main>
}
