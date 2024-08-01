import { http, HttpResponse } from 'msw'

const postExample2 = http.post('./meettime/week/create', () => {
  return HttpResponse.json({
    meeting_id: 10,
    meeting_title: '멋사',
    meeting_type: 'W',
    meeting_list: ['monday', 'sunday'],
    meeting_day_id: [40, 41],
    meeting_start_time: '09 : 00',
    meeting_end_time: '12 : 00',
    meeting_create_time: ' 2024-07-29T12:00:00',
  })
})

export { postExample2 }
