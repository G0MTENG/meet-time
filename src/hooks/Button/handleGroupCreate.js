import { useLocation, useNavigate } from 'react-router-dom'
import useGroupStore from '@/stores/groupStore'
import { GROUPTYPE } from '@/stores/groupStore'

export default function useGroupCreate() {
  const { setGroupType, groupName, dates, weeks } = useGroupStore()
  const navigate = useNavigate()
  const path = useLocation()

  const handleGroupCreate = () => {
    if (!groupName || path === '/create') {
      return
    }

    console.log('groupName: ', groupName)
    console.log('dates: ', dates)
    console.log('weeks: ', weeks)

    path === '/create/date'
      ? setGroupType(GROUPTYPE.WEEK)
      : setGroupType(GROUPTYPE.DATE)

    navigate('/create/time')

    // fetch('URL', dates or weeks)
  }

  return handleGroupCreate
}
