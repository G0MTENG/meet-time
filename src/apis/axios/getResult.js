import { api } from '@/apis/api'

export const getResult = async ({ meetingId }) => {
  const response = await api.get(`/show/${meetingId}`)

  return response.data
}
