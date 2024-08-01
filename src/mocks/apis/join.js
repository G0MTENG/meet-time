import { http, HttpResponse } from 'msw'

const postJoin = http.get('/meettime/join', ({ request }) => {
  const url = new URL(request.url)
  const meetingId = url.searchParams.get('mettingId')
  const meetingTitle = url.searchParams.get('meetingTitle')

  return HttpResponse.json({
    meeting_id: meetingId,
    meeting_title: meetingTitle,
    meeting_type: 'D',
    meeting_list: ['2024-07-29', '2024-07-30', '2024-07-31'],
    meeting_day_id: [34, 35, 36],
    meeting_start_time: 18,
    meeting_end_time: 24,
    meeting_create_time: ' 2024-07-29T12:00:00',
  })
})

export { postJoin }
