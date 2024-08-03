import { postDayCreate } from '@/mocks/apis/day-create'
import { postJoin } from '@/mocks/apis/join'
import { postLogin } from '@/mocks/apis/login'
import { postWeekCreate } from '@/mocks/apis/week-create'
import { getSelect } from '@/mocks/apis/select'
import { postSelect } from './apis/post-select'

export const handlers = [
  postDayCreate,
  postWeekCreate,
  postLogin,
  postJoin,
  getSelect,
  postSelect,
]
