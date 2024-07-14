import { Route, Routes } from 'react-router-dom'
import WeekSelectPage from './week/WeekSelectPage'
import styles from '@/styles/select/SelectPage.module.css'
import Logo from '@/components/Logo'
import GroupNameInput from '@/components/GroupNameInput'
import SelectNavBar from '@/components/SelectNavBar'
import { useState } from 'react'
import Button from '@/components/Button'
import Calendar from './date/Calendar'

export default function SelectPage() {
  const [groupName, setGroupName] = useState('')
  const handleChange = e => {
    setGroupName(e.target.value)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.imageWrapper}>
        <Logo />
      </div>
      <GroupNameInput value={groupName} onChange={handleChange} />
      <SelectNavBar />
      <div className={styles.routes}>
        <Routes>
          <Route path="date" element={<Calendar />}></Route>
          <Route path="week" element={<WeekSelectPage />}></Route>
        </Routes>
      </div>
      <Button>모임생성</Button>
    </div>
  )
}
