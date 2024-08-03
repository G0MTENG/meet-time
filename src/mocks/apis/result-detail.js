import { http, HttpResponse } from 'msw'

const getResultDetail = http.get(
  '/meettime/show/:meeting_id/:meeting_day_id/:possible_id',
  () => {
    return HttpResponse.json({
      meeting_id: 1,
      meeting_title: '해커톤',
      meeting_day_id: 34,
      possible_id: 20,
      meeting_create_time: ' 2024-07-29T12:00:00',
      possible_people: ['강평종', '임소미'],
    })
  },
)

export { getResultDetail }
