import styles from '@/styles/create/TimeRange.module.css'
import TimeLabelContainer from './TimeLabelContainer'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import useGroupStore from '@/stores/groupStore'
import useTime from '@/hooks/TimeSelect/useTime'

export default function TimePage() {
  const navigate = useNavigate()
  const { groupName } = useGroupStore()
  const {
    state: [start, end],
    label: [startOptions, endOptions],
    handler: [handleStartChange, handleEndChange],
  } = useTime()

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Logo />
      </div>
      <p className={styles.top_label}>시간 범위 선택</p>
      <TimeLabelContainer
        value={start}
        onChange={handleStartChange}
        options={startOptions}
      />
      <TimeLabelContainer
        value={end}
        onChange={handleEndChange}
        options={endOptions}
      />
      <Button onClick={() => navigate(`/login?group=${groupName}`)}>
        모임 생성
      </Button>
    </div>
  )
}
