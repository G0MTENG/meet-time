import { useState, useEffect } from 'react'
import { timeLabel } from '@/utils/timeOptions'
import useGroupStore from '@/stores/groupStore'

export default function useTime() {
  const { startTime, endTime, setStartTime, setEndTime } = useGroupStore()
  const [startOptions, setStartOptions] = useState(timeLabel)
  const [endOptions, setEndOptions] = useState(timeLabel)

  useEffect(() => {
    const updatedEndOptions = timeLabel.filter(ele => ele.id > startTime)
    setEndOptions(updatedEndOptions)
  }, [startTime])

  useEffect(() => {
    const updatedStartOptions = timeLabel.filter(ele => ele.id < endTime)
    setStartOptions(updatedStartOptions)
  }, [endTime])

  const handleStartChange = e => {
    setStartTime(parseInt(e.currentTarget.value, 10))
  }

  const handleEndChange = e => {
    setEndTime(parseInt(e.currentTarget.value, 10))
  }

  return {
    state: [startTime, endTime],
    label: [startOptions, endOptions],
    handler: [handleStartChange, handleEndChange],
  }
}
