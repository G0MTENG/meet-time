import { pickDate } from '@/utils/calendarHelper'
import { create } from 'zustand'

export const GROUPTYPE = {
  DATE: 0,
  WEEK: 1,
}

const useGroupStore = create(set => ({
  groupType: GROUPTYPE.DATE,
  setGroupType: type => set({ groupType: type }),
  groupName: '',
  setGroupName: name => set({ groupName: name }),
  dates: [],
  setDates: date =>
    set(state => {
      const newState = pickDate(state, date)
      return { dates: newState.dates }
    }),
  weeks: Array(7).fill(false),
  setWeeks: weekIdx =>
    set(state => {
      const newWeeks = [...state.weeks]
      newWeeks[weekIdx] = !state.weeks[weekIdx]
      return { weeks: newWeeks }
    }),
  startTime: null,
  setStartTime: time => set({ startTime: time }),
  endTime: null,
  setEndTime: time => set({ endTime: time }),
}))

export default useGroupStore
