import useGroupStore, { GROUPTYPE } from '@/stores/groupStore'
import { useNavigate } from 'react-router-dom'

export default function useGroupCreate() {
  const { groupType, groupName, dates, weeks, startTime, endTime } =
    useGroupStore()
  const navigate = useNavigate()

  const create = () => {
    if (groupType === GROUPTYPE.DATE) {
      console.log(dates)
    } else if (groupType === GROUPTYPE.WEEK) {
      console.log(weeks)
    } else {
      return
    }

    console.log(startTime, endTime)

    navigate(`/login?group=${groupName}`)
  }

  return create
}
