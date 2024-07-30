import axios from 'axios'

export async function getExam() {
  const res = await axios.get('/example')

  return res?.data
}
