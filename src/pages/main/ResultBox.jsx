import styles from '@/styles/main/ResultBox.module.css'
import ColLabel from '@/pages/main/ColLabel'
import useGroupStore from '@/stores/groupStore'
import { getTimeLabel } from '@/utils/dateHelper'
import RowLabelDate from './RowLabelDate'
import RowLabelWeek from './RowLabelWeek'
import { GROUPTYPE } from '@/utils/groupType'

export default function ResultBox() {
  const { groupType, startTime, endTime, weeks, dates } = useGroupStore()
  const colLabel = getTimeLabel(startTime, endTime)
  const rowLabel =
    groupType === GROUPTYPE.DATE ? (
      <RowLabelDate dates={dates} />
    ) : groupType === GROUPTYPE.WEEK ? (
      <RowLabelWeek weeks={weeks} />
    ) : undefined

  if (!rowLabel) {
    console.log('invalid access')
    return <div>Error</div>
  }

  return (
    <div className={styles.container}>
      <div />
      {rowLabel}
      <ColLabel label={colLabel} />
      <div />
      {/* <SelectInfo /> */}
    </div>
  )
}
