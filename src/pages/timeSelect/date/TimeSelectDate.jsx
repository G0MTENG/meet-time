import useTimeStore from '@/stores/timeStore'
import { parseDate } from '@/utils/dateHelper'

export default function TimeSelectDate() {
  const { dates } = useTimeStore()
  return (
    <ul>
      {dates.map((date, i) => {
        const [monthNdate, day] = parseDate(date)
        return (
          <li key={i}>
            {monthNdate} {day}
          </li>
        )
      })}
    </ul>
  )
}
