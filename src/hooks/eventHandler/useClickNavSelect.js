import { useLoginStore } from '@/stores/loginStore'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const useClickNavSelect = () => {
  const { isLogin, meetingId: loginMeetingId } = useLoginStore()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  return () => {
    const [_group, _tag] = [searchParams.get('group'), searchParams.get('tag')]
    if (!isLogin || loginMeetingId != _tag) {
      if (confirm('로그인을 하지 않으셨습니다. 로그인하시겠습니까?')) {
        navigate(`/login?group=${_group}&tag=${_tag}`)
      }
    } else {
      navigate(`/select?group=${_group}&tag=${_tag}`)
    }
  }
}
