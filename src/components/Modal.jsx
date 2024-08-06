import { useResultStore } from '@/stores/resultStore'
import styles from '@/styles/components/Modal.module.css'
import BasicLogo from './BasicLogo'
import { timeLabel } from '@/utils/timeOptions'
import useModalHandler from '@/hooks/eventHandler/useModalHandler'
import { useRef } from 'react'
import { weekly } from '@/utils/dateHelper'
import { GROUPTYPE } from '@/utils/groupType'

export default function Modal({
  closeModal,
  possible,
  meetingDayId,
  possibleId,
}) {
  const boxRef = useRef(null)
  const {
    allPeople,
    meetingDayId: meetingDayIds,
    meetingList,
    meetingType,
  } = useResultStore()
  useModalHandler(boxRef, closeModal)

  const listIdx = meetingDayIds.findIndex(ele => ele === meetingDayId)
  const week = weekly[meetingList[listIdx]]
  const timeIdx = timeLabel.findIndex(ele => ele.id === possibleId)

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.box} ref={boxRef}>
        <div className={styles.handler} />
        <div className={styles.header}>
          <div className={styles.imgWrapper}>
            <BasicLogo />
          </div>
          {meetingType === GROUPTYPE.WEEK ? <div>{week}요일</div> : undefined}
          <div>
            {timeLabel[timeIdx].label} ~ {timeLabel[timeIdx + 1].label}
          </div>
        </div>
        <div className={styles.list}>
          <h5>가능한 사람 ✅</h5>
          <ul>
            {possible.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
          <hr />
          <h5>불가능한 사람 ❌</h5>
          <ul>
            {allPeople
              .filter(ele => !possible?.includes(ele))
              .map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
