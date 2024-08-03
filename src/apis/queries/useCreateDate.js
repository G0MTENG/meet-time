import { useMutation } from '@tanstack/react-query'
import { postCreateDate } from '../axios/postCreateDate'
import { useNavigate } from 'react-router-dom'
import { useGroupDataStore } from '@/hooks/api/useGroupDataStore'

const useCreateDate = () => {
  const navigate = useNavigate()
  const storeRequest = useGroupDataStore()
  return useMutation({
    mutationFn: data => postCreateDate(data),
    onSuccess: data => {
      storeRequest(data)
      alert(`${data?.meeting_title}이 생성되었습니다!`)
      navigate(`/login?group=${data?.meeting_title}&tag=${data?.meeting_id}`, {
        replace: true,
      })
    },
    onError: error => {
      console.error('생성 오류:', error)
      alert('생성에 실패했습니다. 다시 시도해주세요.')
    },
  })
}

export { useCreateDate }
