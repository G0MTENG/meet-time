import { useSearchParams } from 'react-router-dom'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { useEffect } from 'react'
import { postJoin } from '@/apis/axios/postJoin'
import { GROUPTYPE } from '@/utils/groupType'
import { useGroupJoinDataStore } from './useGroupJoinDataStore'

export const useEnterLoginFirst = () => {
  const [searchParams] = useSearchParams()
  const { meetingType } = useGroupPersistStore()
  const storeRequest = useGroupJoinDataStore()

  useEffect(() => {
    if (meetingType === GROUPTYPE.NONE) {
      const [_group, _tag] = [
        searchParams.get('group'),
        searchParams.get('tag'),
      ]
      ;(async function (group, tag) {
        const res = await postJoin(group, tag)
        storeRequest(res)
      })(_group, _tag)
    }
  }, [])
}
