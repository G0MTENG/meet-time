import { create } from 'zustand'

export const useColorStore = create(set => ({
  colorList: [],
  setColorList: list => set({ colorList: list }),
}))
