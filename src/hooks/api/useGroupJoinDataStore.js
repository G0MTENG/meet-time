import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { GROUPTYPE } from '@/utils/groupType'

export const useGroupJoinDataStore = () => {
  const {
    setMeetingId,
    setMeetingTitle,
    setMeetingType,
    setMeetingList,
    setMeetingDayId,
    setMeetingStartTime,
    setMeetingEndTime,
  } = useGroupPersistStore()

  return function (data) {
    const {
      meeting_id,
      meeting_title,
      meeting_type,
      meeting_day_list,
      meeting_week_list,
      meeting_day_id,
      meeting_start_time,
      meeting_end_time,
    } = data

    if (meeting_type === GROUPTYPE.DATE) {
      setMeetingList(meeting_day_list)
    } else {
      setMeetingList(meeting_week_list)
    }

    setMeetingId(meeting_id)
    setMeetingTitle(meeting_title)
    setMeetingType(meeting_type)
    setMeetingDayId(meeting_day_id)
    setMeetingStartTime(meeting_start_time)
    setMeetingEndTime(meeting_end_time)
  }
}
