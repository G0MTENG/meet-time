import { postDayCreate } from '@/mocks/apis/day-create'
import { postJoin } from '@/mocks/apis/join'
import { postLogin } from '@/mocks/apis/login'
import { postWeekCreate } from '@/mocks/apis/week-create'

export const handlers = [postDayCreate, postWeekCreate, postLogin, postJoin]
