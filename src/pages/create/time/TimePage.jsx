import styles from '@/styles/create/TimeRange.module.css'
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
      <div className={styles.timelabel}>
        <p className={styles.label}>시작 시간</p>
        <select
          onChange={handleStartChange}
          value={start}
          className={styles.input}
        >
          {startOptions.map((option, idx) => (
            <option key={idx} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.timelabel}>
        <p className={styles.label}>종료 시간</p>
        <select onChange={handleEndChange} value={end} className={styles.input}>
          {endOptions.map((option, idx) => (
            <option key={idx} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={() => navigate(`/login?group=${groupName}`)}>
        모임 생성
      </Button>
    </div>
  )
}
