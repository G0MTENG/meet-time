import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useLoginStore = create(
  persist(
    set => ({
      isLogin: false,
      setLoginout: () => set({ isLogin: false }),
      setLogin: () => set({ isLogin: true }),
      meetingId: 0,
      setMeetingId: id => set({ meetingId: id }),
      meetingTitle: '',
      setMeetingTitle: title => set({ meetingTitle: title }),
    }),
    {
      name: 'login',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
