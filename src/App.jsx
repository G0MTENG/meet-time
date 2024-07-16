import { Routes, Route } from 'react-router-dom'
import styles from '@/styles/App.module.css'
import HomePage from '@/pages/home/HomePage'
import LoginPage from '@/pages/login/LoginPage'
import SelectPage from '@/pages/select/SelectPage'
import TimeSelectPage from './pages/timeSelect/timeSelectPage'
import TimeRangePage from './pages/timeRange/TimeRangePage'

export default function App() {
  return (
    <div className={styles.layout}>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="select/*" element={<SelectPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="timeSelect/*" element={<TimeSelectPage />}></Route>
        <Route path="timeRange" element={<TimeRangePage />}></Route>
      </Routes>
    </div>
  )
}
