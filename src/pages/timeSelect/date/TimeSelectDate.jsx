import useGroupStore from '@/stores/groupStore'
import { parseDate } from '@/utils/dateHelper'

export default function TimeSelectDate() {
  const { dates } = useGroupStore()
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
