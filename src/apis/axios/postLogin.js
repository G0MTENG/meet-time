import axios from 'axios'

export const postLogin = async ({ id, nickname, password }) => {
  const response = await axios.post(`${id}/login`, {
    meeting_id: id,
    nickname,
    password,
  })

  return response?.data
}
