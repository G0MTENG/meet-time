import styles from '@/styles/login/LoginInput.module.css'
import { useState } from 'react'

export default function IdInput() {
  const [id, setId] = useState('')
  const handleChangeId = e => setId(e.target.value)

  return (
    <div className={styles.header}>
      <p>아이디</p>
      <input type="text" onChange={handleChangeId} placeholder="아이디 입력" />
    </div>
  )
}
