import { useResultStore } from '@/stores/resultStore'
import { GROUPTYPE } from '@/utils/groupType'

export const useStoreResultInStore = () => {
  const {
    setMeetingId,
    setMeetingTitle,
    setMeetingList,
    setMeetingDayId,
    setMeetingStartTime,
    setMeetingEndTime,
    setAllPeople,
    setPossibleList,
    setMeetingType,
  } = useResultStore()

  return data => {
    if (!data) {
      return
    }

    if (data.meeting_type === GROUPTYPE.DATE) {
      setMeetingList(data.meeting_day_list)
    } else {
      setMeetingList(data.meeting_week_list)
    }

    setMeetingId(data.meeting_id)
    setMeetingTitle(data.meeting_title)
    setMeetingDayId(data.meeting_day_id)
    setMeetingStartTime(data.meeting_start_time)
    setMeetingEndTime(data.meeting_end_time)
    setAllPeople(data.all_people)
    setPossibleList(data.possible_list)
    setMeetingType(data.meeting_type)
  }
}
