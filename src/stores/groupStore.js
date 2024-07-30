import { create } from 'zustand'

export const GROUPTYPE = {
  NONE: 'N',
  DATE: 'D',
  WEEK: 'W',
}

const useGroupStore = create(set => ({
  groupType: GROUPTYPE.NONE,
  setGroupType: type => set({ groupType: type }),
  mettingId: 0,
  setMittingId: id => set({ mettingId: id }),
  groupName: '',
  setGroupName: name => set({ groupName: name }),
  dates: [],
  setDates: date =>
    set(state => {
      const existingIndex = state.dates.indexOf(date)
      let newDates = []
      if (existingIndex >= 0) {
        newDates = [
          ...state.dates.slice(0, existingIndex),
          ...state.dates.slice(existingIndex + 1),
        ]
      } else {
        newDates = [...state.dates, date]
      }

      return { dates: newDates }
    }),
  weeks: Array(7).fill(false),
  setWeeks: weekIdx =>
    set(state => {
      const newWeeks = [...state.weeks]
      newWeeks[weekIdx] = !state.weeks[weekIdx]
      return { weeks: newWeeks }
    }),
  startTime: 18,
  setStartTime: time => set({ startTime: time }),
  endTime: 36,
  setEndTime: time => set({ endTime: time }),
}))

export default useGroupStore
