import { useCreateDate } from '@/apis/queries/useCreateDate'
import useGroupStore, { GROUPTYPE } from '@/stores/groupStore'

export default function useGroupCreate() {
  const { groupType, groupName, dates, weeks, startTime, endTime } =
    useGroupStore()
  const { mutate } = useCreateDate()

  const create = () => {
    if (groupType === GROUPTYPE.DATE) {
      mutate({
        meetingTitle: groupName,
        meetingType: groupType,
        meetingList: dates,
        meetingStartTime: startTime,
        meetingEndTime: endTime,
      })
    } else if (groupType === GROUPTYPE.WEEK) {
      console.log(weeks)
    } else {
      return
    }
  }

  return create
}
