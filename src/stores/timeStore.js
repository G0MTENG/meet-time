import { create } from 'zustand'

const useTimeStore = create(set => ({
  dates: [],
  selectDate: date =>
    set(state => {
      const dates = state.dates || [] // Ensure state.dates is an array
      const dateString = date.toDateString()
      if (dates.some(d => d.toDateString() === dateString)) {
        return {
          dates: dates.filter(d => d.toDateString() !== dateString),
        }
      } else {
        return {
          dates: [...dates, date],
        }
      }
    }),
}))

export default useTimeStore
