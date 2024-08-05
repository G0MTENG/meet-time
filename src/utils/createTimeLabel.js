import { timeLabel } from './timeOptions'

export const createTimeLabels = (start, end) => {
  return timeLabel.filter(ele => ele.id >= start && ele.id < end)
}
