import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/home/HomePage'
import LoginPage from '@/pages/login/LoginPage'
import TimePage from '@/pages/create/time/TimePage'
import Calendar from '@/pages/create/date/Calendar'
import CreateLayout from '@/layout/CreateLayout'
import SelectWeek from '@/pages/create/week/WeekSelectPage'

const AppRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="/create" element={<CreateLayout />}>
      <Route path="date" element={<Calendar />} />
      <Route path="week" element={<SelectWeek />} />
    </Route>
    <Route path="/create/time" element={<TimePage />} />
  </Routes>
)

export default AppRoutes
