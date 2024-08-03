import { api } from '@/apis/api'

export const getSelect = async ({ meetingId, userId }) => {
  const response = await api.get(`/select/${meetingId}/${userId}`)

  return response.data
}
