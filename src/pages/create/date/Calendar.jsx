import ReactCalendar from 'react-calendar'
import '@/styles/create/Calendar.css'
import dayjs from 'dayjs'
import useGroupStore from '@/stores/groupStore'
import { getDate } from '@/utils/dateHelper'

export default function Calendar() {
  const { dates, setDates } = useGroupStore()

  const handleDayClick = date => {
    const [_year, _month, _date, _day] = getDate(date)
    if (!_year || !_month || !_date || !_day) {
      console.log('error')
    }

    setDates(`${_year}/${_month}/${_date}/${_day}`)
  }

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const [_year, _month, _date, _day] = getDate(date)
      if (dates.some(d => d === `${_year}/${_month}/${_date}/${_day}`)) {
        return 'react-calendar__tile--highlight'
      }
    }
    return null
  }

  return (
    <ReactCalendar
      onClickDay={handleDayClick}
      tileClassName={tileClassName}
      prev2Label={null}
      next2Label={null}
      minDetail="year"
      calendarType="gregory"
      showNeighboringMonth={false}
      formatMonthYear={(_, date) => dayjs(date).format('YYYY. MM')}
      formatDay={(_, date) => dayjs(date).date()}
    />
  )
}
