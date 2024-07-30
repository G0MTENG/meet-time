import { useQuery } from '@tanstack/react-query'
import { getExam } from '@/apis/exampleAxios'

const useExamQuery = () => useQuery({ queryKey: ['exam'], queryFn: getExam })

export { useExamQuery }
