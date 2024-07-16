import pickDate from '@/utils/pickDate'
import { create } from 'zustand'

const useTimeStore = create(set => ({
  dates: [],
  selectDate: date => set(state => pickDate(state, date)),
}))

export default useTimeStore
