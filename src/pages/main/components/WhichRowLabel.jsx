import { GROUPTYPE } from '@/utils/groupType'
import RowLabelDate from './RowLabelDate'
import RowLabelWeek from './RowLabelWeek'

export default function WhichRowLabel({ meetingType, meetingList }) {
  if (meetingType === GROUPTYPE.DATE) {
    return <RowLabelDate dates={meetingList} />
  } else if (meetingType === GROUPTYPE.WEEK) {
    return <RowLabelWeek weeks={meetingList} />
  } else {
    return <div>Error</div>
  }
}
