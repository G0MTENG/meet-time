import { useCreateDate } from '@/apis/queries/useCreateDate'
import { useCreateWeek } from '@/apis/queries/useCreateWeek'
import useGroupStore from '@/stores/groupStore'
import { GROUPTYPE } from '@/utils/groupType'

export default function useGroupCreate() {
  const { groupType, groupName, dates, weeks, startTime, endTime } =
    useGroupStore()
  const { mutate: dateMutate } = useCreateDate()
  const { mutate: weekMutate } = useCreateWeek()

  return () => {
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
}
