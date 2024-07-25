import ReactCalendar from 'react-calendar'
import '@/styles/create/Calendar.css'
import dayjs from 'dayjs'
import useGroupStore from '@/stores/groupStore'

export default function Calendar() {
  const { dates, setDates } = useGroupStore()

  const handleDayClick = date => {
    setDates(date)
  }

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toDateString()
      if (dates.some(d => d.toDateString() === dateString)) {
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
