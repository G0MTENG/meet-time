import { api } from '@/apis/api'

export const getResultPossible = async ({
  meetingId,
  meetingDayId,
  possibleId,
}) => {
  const response = await api.get(
    `/show/${meetingId}/${meetingDayId}/${possibleId}`,
  )

  return response.data
}
