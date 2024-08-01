import { useLocation, useNavigate } from 'react-router-dom'
import useGroupStore from '@/stores/groupStore'
import { GROUPTYPE } from '@/stores/groupStore'

export default function useSettingDatesNWeeks() {
  const { setGroupType, groupName } = useGroupStore()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleGroupCreate = () => {
    if (!groupName || pathname === '/create') {
      return
    }

    pathname === '/create/date'
      ? setGroupType(GROUPTYPE.DATE)
      : setGroupType(GROUPTYPE.WEEK)

    navigate('/create/time')
  }

  return handleGroupCreate
}
