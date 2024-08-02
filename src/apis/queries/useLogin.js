import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '@/apis/axios/postLogin'
import { useGroupPersistStore } from '@/stores/groupPersistStore'

export const useLogin = () => {
  const navigate = useNavigate()
  const { setUserId, meetingTitle, meetingId } = useGroupPersistStore()

  return useMutation({
    mutationFn: data => postLogin(data),
    onSuccess: data => {
      setUserId(data?.id)
      console.log('로그인 성공')
      navigate(`/select?group=${meetingTitle}&tag=${meetingId}`)
    },
    onError: () => {
      alert('로그인에 실패하였습니다. 다시 시도해주세요!')
    },
  })
}
