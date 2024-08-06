import { api } from '@/apis/api'

const postJoin = async (meetingTitle, meetingId) => {
  const response = await api.post('join', {
    meeting_title: meetingTitle,
    meeting_id: meetingId,
  })

  return response.data
}

export { postJoin }
