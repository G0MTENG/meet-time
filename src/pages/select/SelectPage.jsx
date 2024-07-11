import { Route, Routes } from 'react-router-dom'
import WeekSelectPage from './week/WeekSelectPage'
import DateSelectPage from './date/DateSelectPage'
import styles from '@/styles/select/SelectPage.module.css'
import Logo from '@/components/Logo'
import GroupNameInput from '@/components/GroupNameInput'
import { useState } from 'react'

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
      <Routes>
        <Route path="date" element={<DateSelectPage />}></Route>
        <Route path="week" element={<WeekSelectPage />}></Route>
      </Routes>
    </div>
  )
}
