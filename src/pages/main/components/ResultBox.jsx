import styles from '@/styles/main/ResultBox.module.css'
import ColLabel from '@/pages/main/components/ColLabel'
import { useResultStore } from '@/stores/resultStore'
import SelectInfo from './SelectInfo'
import WhichRowLabel from './WhichRowLabel'
import { useEffect, useState } from 'react'
import { getTimeLabel } from '@/utils/dateHelper'

export default function ResultBox({ handleModalOpen }) {
  const { meetingType, meetingList, meetingStartTime, meetingEndTime } =
    useResultStore()
  const [label, setLabel] = useState(null)

  useEffect(() => {
    setLabel(getTimeLabel(meetingStartTime, meetingEndTime))
  }, [meetingStartTime, meetingEndTime])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div />
        <WhichRowLabel meetingType={meetingType} meetingList={meetingList} />
        <ColLabel label={label} />
        <SelectInfo
          rowNum={meetingList?.length}
          colNum={meetingEndTime - meetingStartTime}
          label={label}
          handleModalOpen={handleModalOpen}
        />
      </div>
    </div>
  )
}
