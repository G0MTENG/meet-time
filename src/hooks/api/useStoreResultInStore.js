import { useResultStore } from '@/stores/resultStore'

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

    setMeetingId(data?.meeting_id)
    setMeetingTitle(data?.meeting_title)
    setMeetingList(data?.meeting_list)
    setMeetingDayId(data?.meeting_day_id)
    setMeetingStartTime(data?.meeting_start_time)
    setMeetingEndTime(data?.meeting_end_time)
    setAllPeople(data?.all_people)
    setPossibleList(data?.possible_list)
    setMeetingType(data?.meeting_type)
  }
}
