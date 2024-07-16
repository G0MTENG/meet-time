import styles from '@/styles/select/DateSelectPage.module.css'

export default function SelectWeek() {
  const week = ['월', '화', '수', '목', '금', '토', '일']

  return (
    <div className={styles.container}>
      {week.map((v, i) => (
        <div key={i}>{v}요일</div>
      ))}
    </div>
  )
}
