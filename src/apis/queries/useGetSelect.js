import { useQuery } from '@tanstack/react-query'
import { getSelect } from '@/apis/axios/getSelect'

export const useGetSelect = ({ meetingId, userId }) =>
  useQuery({
    queryKey: ['select', meetingId, userId],
    queryFn: () => getSelect({ meetingId, userId }),
  })
