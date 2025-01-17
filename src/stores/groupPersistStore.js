import { GROUPTYPE } from '@/utils/groupType'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useGroupPersistStore = create(
  persist(
    set => ({
      initial: () =>
        set({
          meetingId: 0,
          meetingTite: '',
          meetingType: GROUPTYPE.NONE,
          meetingList: null,
          meetingDayId: null,
          meetingStartTime: null,
          meetingEndTime: null,
          userId: null,
        }),
      meetingId: 0,
      setMeetingId: id => set({ meetingId: id }),
      meetingTitle: '',
      setMeetingTitle: title => set({ meetingTitle: title }),
      meetingType: GROUPTYPE.NONE,
      setMeetingType: type => set({ meetingType: type }),
      meetingList: null,
      setMeetingList: list => set({ meetingList: list }),
      meetingDayId: null,
      setMeetingDayId: ids => set({ meetingDayId: ids }),
      meetingStartTime: 0,
      setMeetingStartTime: time => set({ meetingStartTime: time }),
      meetingEndTime: 48,
      setMeetingEndTime: time => set({ meetingEndTime: time }),
      userId: null,
      setUserId: id => set({ userId: id }),
    }),
    {
      name: 'group-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
