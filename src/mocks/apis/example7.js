import { http, HttpResponse } from 'msw'

const postExample5 = http.post('/meettime/select/:meeting_id/:user_id', () => {
  return HttpResponse.json({
    meeting_id: 1,
    meeting_title: '해커톤',
    meeting_list: '[2024 - 07 - 29, 2024 - 07 - 30, 2024 - 07 - 31]',
    meeting_day_id: [34, 35, 36],
    meeting_start_time: '09 : 00',
    meeting_end_time: '12 : 00',
    meeting_create_time: ' 2024-07-29T12:00:00',
    user_id: 17,
    nickname: '정다영',
    possible_list: {
      34: [19, 20, 21, 22, 23, 24],
      35: [],
      36: [20, 21],
    },
  })
})

export { postExample5 }
