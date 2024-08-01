import { postDayCreate } from './apis/day-create'
import { postJoin } from './apis/join'
import { postLogin } from './apis/login'
import { postWeekCreate } from './apis/week-create'

export const handlers = [postDayCreate, postWeekCreate, postLogin, postJoin]
