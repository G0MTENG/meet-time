import { useLocation, useNavigate } from 'react-router-dom'
import useGroupNameStore from '@/stores/groupNameStore'

export default function useGroupCreate() {
  const { setGroupName, inputName } = useGroupNameStore()
  const navigate = useNavigate()
  const path = useLocation()

  const handleGroupCreate = () => {
    if (!inputName) {
      return
    }

    if (path === '/select') {
      return
    }

    setGroupName(inputName)

    // 나중에 '/timeRange로' 이동하게 바꾸면 됨
    path === '/select/date'
      ? navigate('/timeSelect/week')
      : navigate('/timeSelect/date')
  }

  return handleGroupCreate
}
