import { useEffect, useState } from 'react'
import { getExam } from '@/apis/exampleAxios'
import { useExamQuery } from '@/apis/queries/exampleQuery'

export default function Example() {
  const [msg1, setMsg1] = useState('')
  const { data } = useExamQuery() // use tanstack query

  useEffect(() => {
    ;(async function () {
      const res = await getExam()
      setMsg1(res?.message)
    })()
  }, [])

  return (
    <>
      <div>axios without tanstack-query : {msg1}</div>
      <div>tanstack query : {data?.message}</div>
    </>
  )
}
