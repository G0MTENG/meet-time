import { useGroupPersistStore } from '@/stores/groupPersistStore'
import styles from '@/styles/select/TimeSelectDate.module.css'
import { createTimeLabels } from '@/utils/createTimeLabel'
import { useEffect, useState } from 'react'
import DateSelector from './DateSelector'
import TimeSelector from './TimeSelector'
import WeekSelector from './WeekSelector'
import { GROUPTYPE } from '@/utils/groupType'

export default function TimeSelectDate({
  listState,
  setListState,
  keys,
  start,
  end,
}) {
  const timeLabels = createTimeLabels(start, end)
  const [index, setIndex] = useState(0)
  const { meetingList, meetingType } = useGroupPersistStore()
  const [possible, setPossible] = useState([])

  useEffect(() => {
    if (listState) {
      setPossible(listState[keys[index]] || [])
    }
  }, [listState, keys, index])

  const handleDateClick = idx => {
    if (idx !== index) {
      const updatedList = { ...listState }
      updatedList[keys[index]] = possible
      console.log(updatedList)
      setListState(updatedList)
      setIndex(idx)
    }
  }

  const handleTimeClick = id => {
    const idx = possible.findIndex(item => item === id)
    const updatedPossible = [...possible]
    if (idx === -1) {
      updatedPossible.push(id)
    } else {
      updatedPossible.splice(idx, 1)
    }
    setPossible(updatedPossible)
  }

  return (
    <div className={styles.wrapper}>
      {meetingType === GROUPTYPE.DATE ? (
        <DateSelector
          meetingList={meetingList}
          index={index}
          handleClick={handleDateClick}
        />
      ) : (
        <WeekSelector
          meetingList={meetingList}
          index={index}
          handleClick={handleDateClick}
        />
      )}
      <TimeSelector
        timeLabels={timeLabels}
        possible={possible}
        handleClick={handleTimeClick}
        end={end}
      />
    </div>
  )
}
