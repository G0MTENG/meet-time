import { useMutation } from '@tanstack/react-query'
import { postSelect } from '@/apis/axios/postSelect'
import { useNavigate } from 'react-router-dom'
import { useGroupPersistStore } from '@/stores/groupPersistStore'

export const useUpdateSelectTime = () => {
  const navigate = useNavigate()
  const { meetingTitle, meetingId } = useGroupPersistStore()
  return useMutation({
    mutationFn: data => postSelect(data),
    onSuccess: () => {
      alert('완료되었습니다.')
      navigate(`/main?group=${meetingTitle}&tag=${meetingId}`)
    },
    onError: error => {
      console.log('데이터 업데이트 실패', error)
      alert('실패하였습니다. 다시 시도해주세요')
    },
  })
}
