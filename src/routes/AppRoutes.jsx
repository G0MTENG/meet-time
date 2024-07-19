import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/home/HomePage'
import LoginPage from '@/pages/login/LoginPage'
import SelectPage from '@/pages/select/SelectPage'
import TimeSelectPage from '@/pages/timeSelect/TimeSelectPage'
import TimeRangePage from '@/pages/timeRange/TimeRangePage'

const AppRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="select/*" element={<SelectPage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="time-select/*" element={<TimeSelectPage />} />
    <Route path="time-range" element={<TimeRangePage />} />
  </Routes>
)

export default AppRoutes
