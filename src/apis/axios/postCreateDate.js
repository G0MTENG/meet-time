import { api } from '@/apis/api'

const postCreateDate = async ({
  meetingTitle,
  meetingType,
  meetingList,
  meetingStartTime,
  meetingEndTime,
}) => {
  const response = await api.post('day/create', {
    meeting_title: meetingTitle,
    meeting_type: meetingType,
    meeting_list: meetingList,
    meeting_start_time: meetingStartTime,
    meeting_end_time: meetingEndTime,
  })

  return response.data
}

export { postCreateDate }
