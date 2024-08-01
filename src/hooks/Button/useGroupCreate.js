import { useCreateDate } from '@/apis/queries/useCreateDate'
import { useCreateWeek } from '@/apis/queries/useCreateWeek'
import useGroupStore, { GROUPTYPE } from '@/stores/groupStore'

export default function useGroupCreate() {
  const { groupType, groupName, dates, weeks, startTime, endTime } =
    useGroupStore()
  const { mutate: dateMutate } = useCreateDate()
  const { mutate: weekMutate } = useCreateWeek()

  const create = () => {
    const createGroupData = {
      meetingTitle: groupName,
      meetingType: groupType,
      meetingList: undefined,
      meetingStartTime: startTime,
      meetingEndTime: endTime,
    }

    if (groupType === GROUPTYPE.DATE) {
      createGroupData.meetingList = dates
      dateMutate(createGroupData)
    } else if (groupType === GROUPTYPE.WEEK) {
      const parseWeeks = []
      weeks.forEach((ele, idx) => {
        if (ele === true) {
          parseWeeks.push(idx + 1)
        }
      })

      createGroupData.meetingList = parseWeeks
      weekMutate(createGroupData)
    } else {
      return
    }
  }

  return create
}
