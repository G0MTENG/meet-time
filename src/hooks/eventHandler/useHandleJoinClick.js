import { useNavigate } from 'react-router-dom'
import { getJoin } from '@/apis/axios/getJoin'
import { useGroupDataStore } from '../api/useGroupDataStore'

export const useHandleJoinClick = () => {
  const navigate = useNavigate()
  const storeRequest = useGroupDataStore()
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
      const res = await getJoin(_groupName, _tag)
      console.log(res)
      storeRequest(res)
      navigate(`/login?group=${_groupName}&tag=${_tag}`)
    } catch (e) {
      setError('데이터를 전송하는데 실패하였습니다.')
    }
  }
}
