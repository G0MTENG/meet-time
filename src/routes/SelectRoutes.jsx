import { Route, Routes } from 'react-router-dom'
import Calendar from '@/pages/select/date/Calendar'
import WeekSelectPage from '@/pages/select/week/WeekSelectPage'

export default function SelectRoutes() {
  return (
    <Routes>
      <Route path="date" element={<Calendar />} />
      <Route path="week" element={<WeekSelectPage />} />
    </Routes>
  )
}
