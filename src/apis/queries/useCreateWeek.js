import { useMutation } from '@tanstack/react-query'
import { postCreateWeek } from '@/apis/axios/postCreateWeek'
import { useNavigate } from 'react-router-dom'

const useCreateWeek = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: data => postCreateWeek(data),
    onSuccess: data => {
      console.log('생성 성공:', data)
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

export { useCreateWeek }
