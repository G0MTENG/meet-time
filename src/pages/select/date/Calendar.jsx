import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import '@/styles/select/Calendar.css'
import dayjs from 'dayjs'

export default function Calendar() {
  const [selectedDates, setSelectedDates] = useState([])

  const handleDayClick = date => {
    const dateString = date.toDateString()
    if (selectedDates.some(d => d.toDateString() === dateString)) {
      setSelectedDates(
        selectedDates.filter(d => d.toDateString() !== dateString),
      )
    } else {
      setSelectedDates([...selectedDates, date])
    }
  }

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toDateString()
      if (selectedDates.some(d => d.toDateString() === dateString)) {
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
