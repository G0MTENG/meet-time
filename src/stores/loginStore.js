import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useLoginStore = create(
  persist(
    set => ({
      loginInit: () =>
        set({
          isLogin: false,
          meetingId: 0,
          meetingTitle: '',
        }),
      isLogin: false,
      setLoginout: () => set({ isLogin: false }),
      setLogin: () => set({ isLogin: true }),
      meetingId: 0,
      setMeetingId: id => set({ meetingId: id }),
      nickname: '',
      setNickname: name => set({ nickname: name }),
    }),
    {
      name: 'login',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
