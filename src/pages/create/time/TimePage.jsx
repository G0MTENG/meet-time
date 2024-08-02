import styles from '@/styles/create/TimePage.module.css'
import TimeLabelContainer from './TimeLabelContainer'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import useTime from '@/hooks/TimeSelect/useTime'
import useGroupCreate from '@/hooks/Button/useGroupCreate'

export default function TimePage() {
  const create = useGroupCreate()
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
        label={'시작 시간'}
        value={start}
        onChange={handleStartChange}
        options={startOptions}
      />
      <TimeLabelContainer
        label={'종료 시간'}
        value={end}
        onChange={handleEndChange}
        options={endOptions}
      />
      <Button onClick={create}>모임 생성</Button>
    </div>
  )
}
