import styles from '@/styles/main/ResultBox.module.css'
import ColLabel from '@/pages/main/components/ColLabel'
import { getTimeLabel } from '@/utils/dateHelper'
import RowLabelDate from './RowLabelDate'
import RowLabelWeek from './RowLabelWeek'
import { GROUPTYPE } from '@/utils/groupType'
import { useResultStore } from '@/stores/resultStore'
import SelectInfo from './SelectInfo'

export default function ResultBox({ handleModalOpen }) {
  const { meetingType, meetingList, meetingStartTime, meetingEndTime } =
    useResultStore()

  const colLabel = getTimeLabel(meetingStartTime, meetingEndTime)
  const rowLabel =
    meetingType === GROUPTYPE.DATE ? (
      <RowLabelDate dates={meetingList} />
    ) : meetingType === GROUPTYPE.WEEK ? (
      <RowLabelWeek weeks={meetingList} />
    ) : undefined

  if (!rowLabel) {
    return <div>Error</div>
  }

  return (
    <div className={styles.container}>
      <div />
      {rowLabel}
      <ColLabel label={colLabel} />
      <SelectInfo
        rowNum={meetingList.length}
        colNum={colLabel.length}
        handleModalOpen={handleModalOpen}
      />
    </div>
  )
}
