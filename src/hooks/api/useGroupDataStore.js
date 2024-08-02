import { useGroupPersistStore } from '@/stores/groupPersistStore'

export const useGroupDataStore = () => {
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
      meeting_list,
      meeting_day_id,
      meeting_start_time,
      meeting_end_time,
    } = data

    setMeetingId(meeting_id)
    setMeetingTitle(meeting_title)
    setMeetingType(meeting_type)
    setMeetingList(meeting_list)
    setMeetingDayId(meeting_day_id)
    setMeetingStartTime(meeting_start_time)
    setMeetingEndTime(meeting_end_time)
  }
}
