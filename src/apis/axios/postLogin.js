import { api } from '../api'

export const postLogin = async ({ id, nickname, password }) => {
  const response = await api.post(`${id}/login`, {
    meeting_id: id,
    nickname,
    password,
  })

  return response?.data
}
