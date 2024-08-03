import { http, HttpResponse } from 'msw'

const getResult = http.get('/meettime/show/:meeting_id', () => {
  return HttpResponse.json({
    meeting_id: 1,
    meeting_type: 'D',
    meeting_title: '해커톤',
    meeting_list: [
      '2024-07-29',
      '2024-07-30',
      '2024-07-31',
      '2024-08-01',
      '2024-08-02',
      '2024-08-03',
      '2024-08-04',
      '2024-08-05',
      '2024-08-06',
    ],
    meeting_day_id: [34, 35, 36, 37, 38, 39, 40, 41, 42],
    meeting_start_time: 18,
    meeting_end_time: 24,
    meeting_create_time: ' 2024-07-29T12:00:00',
    all_people: ['강평종', '임소미', '정다영', '공태윤', '김현수'],
    possible_list: {
      34: [1, 2, 4, 4, 5, 2],
      35: [0, 0, 3, 2, 1, 0],
      36: [1, 1, 1, 1, 1, 1],
      37: [0, 0, 0, 0, 0, 0],
      38: [0, 1, 0, 1, 0, 0],
      39: [0, 0, 1, 0, 0, 0],
      40: [0, 2, 0, 0, 0, 0],
      41: [0, 0, 0, 1, 0, 0],
      42: [0, 0, 0, 0, 3, 0],
    },
  })
})

export { getResult }
