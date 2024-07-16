import { pickDate } from '@/utils/calendarHelper'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTimeStore = create(
  persist(
    set => ({
      dates: [],
      selectDate: date =>
        set(state => {
          const newState = pickDate(state, date)
          return { dates: newState.dates }
        }),
    }),
    {
      name: 'dates-storage', // 로컬 스토리지에 저장될 키 이름
      serialize: state => JSON.stringify(state),
      deserialize: str => {
        const parsedState = JSON.parse(str)
        parsedState.state.dates = parsedState.state.dates.map(
          dateStr => new Date(dateStr),
        )
        return parsedState
      },
    },
  ),
)

export default useTimeStore
