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
    { label: '0:00', value: '0:00' },
    { label: '0:30', value: '0:30' },
    { label: '1:00', value: '1:00' },
    { label: '1:30', value: '1:30' },
    { label: '2:00', value: '2:00' },
    { label: '2:30', value: '2:30' },
    { label: '3:00', value: '3:00' },
    { label: '3:30', value: '3:30' },
    { label: '4:00', value: '4:00' },
    { label: '4:30', value: '4:30' },
    { label: '5:00', value: '5:00' },
    { label: '5:30', value: '5:30' },
    { label: '6:00', value: '6:00' },
    { label: '6:30', value: '6:30' },
    { label: '7:00', value: '7:00' },
    { label: '7:30', value: '7:30' },
    { label: '8:00', value: '8:00' },
    { label: '8:30', value: '8:30' },
    { label: '9:00', value: '9:00' },
    { label: '9:30', value: '9:30' },
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
      <Button onClick={() => navigate(`/login?group=${groupName}`)}>
        모임 생성
      </Button>
    </div>
  )
}
