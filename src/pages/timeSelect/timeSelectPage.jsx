import styles from '@/styles/timeSelect/TimeSelectPage.module.css'
import { Route, Routes } from 'react-router-dom'
import TimeSelectDate from './date/TimeSelectDate'
import TimeSelectWeek from './week/TimeSelectWeek'
import LogoBox from './LogoBox'
import Button from '@/components/Button'

export default function TimeSelectPage() {
  return (
    <div className={styles.container}>
      <LogoBox />
      <Routes>
        <Route path="/date" element={<TimeSelectDate />} />
        <Route path="/week" element={<TimeSelectWeek />} />
      </Routes>
      <Button
        onClick={() => {
          console.log('선택완료')
        }}
      >
        선택완료
      </Button>
    </div>
  )
}
