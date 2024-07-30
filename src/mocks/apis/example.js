import { http, HttpResponse } from 'msw'

const getExample = http.get('/example', () => {
  return HttpResponse.json({
    message: 'hello',
  })
})

export { getExample }
