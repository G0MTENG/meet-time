import styles from '@/styles/select/DateSelectPage.module.css'

export default function SelectWeek() {
  return (
    <div className={styles.container}>
      <div>월요일</div>
      <div>화요일</div>
      <div>수요일</div>
      <div>목요일</div>
      <div>금요일</div>
      <div>토요일</div>
      <div>일요일</div>
    </div>
  )
}
