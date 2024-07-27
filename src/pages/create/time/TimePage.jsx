import styles from '@/styles/create/TimeRange.module.css'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGroupStore from '@/stores/groupStore'

export default function TimePage() {
  const navigate = useNavigate()
  const { groupName } = useGroupStore()

  const options = [
    { label: '00:00', value: '00:00' },
    { label: '00:30', value: '00:30' },
    { label: '01:00', value: '01:00' },
    { label: '01:30', value: '01:30' },
    { label: '02:00', value: '02:00' },
    { label: '02:30', value: '02:30' },
    { label: '03:00', value: '03:00' },
    { label: '03:30', value: '03:30' },
    { label: '04:00', value: '04:00' },
    { label: '04:30', value: '04:30' },
    { label: '05:00', value: '05:00' },
    { label: '05:30', value: '05:30' },
    { label: '06:00', value: '06:00' },
    { label: '06:30', value: '06:30' },
    { label: '07:00', value: '07:00' },
    { label: '07:30', value: '07:30' },
    { label: '08:00', value: '08:00' },
    { label: '08:30', value: '08:30' },
    { label: '09:00', value: '09:00' },
    { label: '09:30', value: '09:30' },
    { label: '10:00', value: '10:00' },
    { label: '10:30', value: '10:30' },
    { label: '11:00', value: '11:00' },
    { label: '11:30', value: '11:30' },
    { label: '12:00', value: '12:00' },
    { label: '12:30', value: '12:30' },
    { label: '13:00', value: '13:00' },
    { label: '13:30', value: '13:30' },
    { label: '14:00', value: '14:00' },
    { label: '14:30', value: '14:30' },
    { label: '15:00', value: '15:00' },
    { label: '15:30', value: '15:30' },
    { label: '16:00', value: '16:00' },
    { label: '16:30', value: '16:30' },
    { label: '17:00', value: '17:00' },
    { label: '17:30', value: '17:30' },
    { label: '18:00', value: '18:00' },
    { label: '18:30', value: '18:30' },
    { label: '19:00', value: '19:00' },
    { label: '19:30', value: '19:30' },
    { label: '20:00', value: '20:00' },
    { label: '20:30', value: '20:30' },
    { label: '21:00', value: '21:00' },
    { label: '21:30', value: '21:30' },
    { label: '22:00', value: '22:00' },
    { label: '22:30', value: '22:30' },
    { label: '23:00', value: '23:00' },
    { label: '23:30', value: '23:30' },
    { label: '24:00', value: '24:00' },
  ]
  const [selectedValue, setSelectedValue] = useState()

  const handleChange = e => {
    setSelectedValue(e.currentTarget.value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Logo />
      </div>
      <p className={styles.top_label}>시간 범위 선택</p>
      <div className={styles.timelabel}>
        <p className={styles.label}>시작 시간</p>
        <select
          onChange={handleChange}
          value={selectedValue}
          className={styles.input}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.timelabel}>
        <p className={styles.label}>종료 시간</p>
        <select
          onChange={handleChange}
          // value={selectedValue}
          className={styles.input}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
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
