import { Route, Routes } from 'react-router-dom'
import WeekSelectPage from './week/WeekSelectPage'
import styles from '@/styles/select/SelectPage.module.css'
import Logo from '@/components/Logo'
import GroupNameInput from '@/components/GroupNameInput'
import SelectNavBar from '@/components/SelectNavBar'
import Button from '@/components/Button'
import Calendar from './date/Calendar'
import useGroupCreate from '@/hooks/Button/handleGroupCreate'

export default function SelectPage() {
  const handleClick = useGroupCreate()

  return (
    <div className={styles.layout}>
      <div className={styles.imageWrapper}>
        <Logo />
      </div>
      <GroupNameInput />
      <SelectNavBar />
      <div className={styles.routes}>
        <Routes>
          <Route path="date" element={<Calendar />} />
          <Route path="week" element={<WeekSelectPage />} />
        </Routes>
      </div>
      <Button handleClick={handleClick}>선택 완료</Button>
    </div>
  )
}
