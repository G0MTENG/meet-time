import { http, HttpResponse } from 'msw'

const postExample4 = http.post('/meettime/:meeting_id/login', () => {
  return HttpResponse.json({
    meeting_id: 1,
    user_id: 17,
    nickname: '정다영',
    password: '1234',
  })
})

export { postExample4 }
