import { useNavigate } from 'react-router-dom'
import { postJoin } from '@/apis/axios/postJoin'
import { useGroupJoinDataStore } from '../api/useGroupJoinDataStore'

export const useHandleJoinClick = () => {
  const navigate = useNavigate()
  const storeRequest = useGroupJoinDataStore()
  const errorMsg = '잘못된 입력입니다. 다시 시도해주세요.'

  return async (groupInput, setError) => {
    if (!groupInput) {
      return
    }

    const [_groupName, _tag] = groupInput.split('#')
    if (!_tag || !_groupName) {
      setError(errorMsg)
      return
    }

    try {
      const res = await postJoin(_groupName, _tag)
      storeRequest(res)
      navigate(`/login?group=${_groupName}&tag=${_tag}`)
    } catch (e) {
      setError('데이터를 전송하는데 실패하였습니다.')
    }
  }
}
