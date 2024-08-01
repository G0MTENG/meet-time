import { http, HttpResponse } from 'msw'

const postWeekCreate = http.post('./meettime/week/create', () => {
  return HttpResponse.json({
    meeting_id: 10,
    meeting_title: '멋사',
    meeting_type: 'W',
    meeting_list: [0, 6],
    meeting_day_id: [40, 41],
    meeting_start_time: 18,
    meeting_end_time: 24,
    meeting_create_time: ' 2024-07-29T12:00:00',
  })
})

export { postWeekCreate }
