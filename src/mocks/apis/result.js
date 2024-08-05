import { http, HttpResponse } from 'msw'

const getResult = http.get('/meettime/show/:meeting_id', () => {
  return HttpResponse.json({
    meeting_id: 1,
    meeting_type: 'W',
    meeting_title: '해커톤',
    meeting_day_list: [],
    meeting_week_list: [1, 2, 3],
    meeting_day_id: [34, 35, 36],
    meeting_start_time: 18,
    meeting_end_time: 24,
    meeting_create_time: ' 2024-07-29T12:00:00',
    all_people: ['강평종', '임소미', '정다영', '공태윤', '김현수'],
    possible_list: {
      34: [1, 2, 4, 4, 5, 2],
      35: [0, 0, 3, 2, 1, 0],
      36: [1, 1, 1, 1, 1, 1],
    },
  })
})

export { getResult }
