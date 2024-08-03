import { api } from '@/apis/api'

export const postSelect = async ({
  meetingId,
  userId,
  meetingDayId,
  possibleList,
}) => {
  const response = await api.post(`/select/${meetingId}/${userId}`, {
    meeting_id: meetingId,
    meeting_day_id: meetingDayId,
    user_id: userId,
    possible_list: possibleList,
  })

  return response.data
}
