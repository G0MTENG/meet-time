import { useGroupDataStore } from '@/hooks/api/useGroupDataStore'
import { useSearchParams } from 'react-router-dom'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { useEffect } from 'react'
import { getJoin } from '@/apis/axios/getJoin'
import { GROUPTYPE } from '@/utils/groupType'

export const useEnterLoginFirst = () => {
  const [searchParams] = useSearchParams()
  const { meetingType } = useGroupPersistStore()
  const storeRequest = useGroupDataStore()

  useEffect(() => {
    if (meetingType === GROUPTYPE.NONE) {
      const [_group, _tag] = [
        searchParams.get('group'),
        searchParams.get('tag'),
      ]
      ;(async function (group, tag) {
        const res = await getJoin(group, tag)
        storeRequest(res)
      })(_group, _tag)
    }
  }, [])
}