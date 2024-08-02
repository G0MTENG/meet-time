import axios from 'axios'

const api = axios.create({
  baseURL: '/meettime',
})

export { api }
