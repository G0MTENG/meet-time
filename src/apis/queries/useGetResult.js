import { useQuery } from '@tanstack/react-query'
import { getResult } from '@/apis/axios/getResult'

export const useGetResult = ({ meetingId }) =>
  useQuery({
    queryKey: [meetingId, 'result'],
    queryFn: () => getResult({ meetingId }),
  })
