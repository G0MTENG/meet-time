import styles from '@/styles/login/LoginInput.module.css'
import { useState } from 'react'

export default function PwInput() {
  const [pw, setPw] = useState('')
  const handleChangePw = e => setPw(e.target.value)

  return (
    <div className={styles.header}>
      <p>비밀번호</p>
      <input
        type="password"
        onChange={handleChangePw}
        placeholder="비밀번호 입력"
      />
    </div>
  )
}
