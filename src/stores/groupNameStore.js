import { create } from 'zustand'

const useGroupNameStore = create(set => ({
  groupName: '',
  setGroupName: name => set({ groupName: name }),
}))

export default useGroupNameStore
