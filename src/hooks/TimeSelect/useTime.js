import { useState, useEffect } from 'react'
import { timeLabel } from '@/utils/timeOptions'

export default function useTime() {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(48)
  const [startOptions, setStartOptions] = useState(timeLabel)
  const [endOptions, setEndOptions] = useState(timeLabel)

  useEffect(() => {
    const updatedEndOptions = timeLabel.filter(ele => ele.id > start)
    setEndOptions(updatedEndOptions)
  }, [start])

  useEffect(() => {
    const updatedStartOptions = timeLabel.filter(ele => ele.id < end)
    setStartOptions(updatedStartOptions)
  }, [end])

  const handleStartChange = e => {
    setStart(parseInt(e.currentTarget.value, 10))
  }

  const handleEndChange = e => {
    setEnd(parseInt(e.currentTarget.value, 10))
  }

  return {
    state: [start, end],
    label: [startOptions, endOptions],
    handler: [handleStartChange, handleEndChange],
  }
}
