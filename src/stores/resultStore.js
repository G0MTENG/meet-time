import { GROUPTYPE } from '@/utils/groupType'
import { create } from 'zustand'

export const useResultStore = create(set => ({
  meetingId: 0,
  setMeetingId: id => set({ meetingId: id }),
  meetingTitle: '',
  setMeetingTitle: title => set({ meetingTitle: title }),
  meetingList: null,
  setMeetingList: list => set({ meetingList: list }),
  meetingDayId: null,
  setMeetingDayId: list => set({ meetingDayId: list }),
  meetingStartTime: 0,
  setMeetingStartTime: time => set({ meetingStartTime: time }),
  meetingEndTime: 48,
  setMeetingEndTime: time => set({ meetingEndTime: time }),
  allPeople: null,
  setAllPeople: people => set({ allPeople: people }),
  possibleList: null,
  setPossibleList: list => set({ possibleList: list }),
  meetingType: GROUPTYPE.NONE,
  setMeetingType: type => set({ meetingType: type }),
}))
