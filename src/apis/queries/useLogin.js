import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '@/apis/axios/postLogin'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { useLoginStore } from '@/stores/loginStore'

export const useLogin = () => {
  const navigate = useNavigate()
  const { setUserId, meetingTitle, meetingId } = useGroupPersistStore()
  const {
    setLogin,
    setMeetingId: loginSetMeetingId,
    setMeetingTitle: loginSetMeetingTitle,
  } = useLoginStore()

  return useMutation({
    mutationFn: data => postLogin(data),
    onSuccess: data => {
      setUserId(data?.user_id)
      console.log('로그인 성공')
      setLogin()
      loginSetMeetingId(meetingId)
      loginSetMeetingTitle(meetingTitle)
      navigate(`/select?group=${meetingTitle}&tag=${meetingId}`)
    },
    onError: () => {
      alert('로그인에 실패하였습니다. 다시 시도해주세요!')
    },
  })
}
