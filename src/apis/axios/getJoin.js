import { api } from '@/apis/api'

const getJoin = async (meetingTitle, meetingId) => {
  const response = await api.get(
    `/join?meetingTitle=${meetingTitle}&meetingId=${meetingId}`,
  )

  return response.data
}

export { getJoin }
