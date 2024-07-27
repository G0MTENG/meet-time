import { useLocation, useNavigate } from 'react-router-dom'
import useGroupStore from '@/stores/groupStore'
import { GROUPTYPE } from '@/stores/groupStore'

export default function useSettingDatesNWeeks() {
  const { setGroupType, groupName } = useGroupStore()
  const navigate = useNavigate()
  const path = useLocation()

  const handleGroupCreate = () => {
    if (!groupName || path === '/create') {
      return
    }

    path === '/create/date'
      ? setGroupType(GROUPTYPE.WEEK)
      : setGroupType(GROUPTYPE.DATE)

    navigate('/create/time')
  }

  return handleGroupCreate
}
