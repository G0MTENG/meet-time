import styles from '@/styles/login/LoginInput.module.css'
import { useEffect, useState } from 'react'

export default function PwInput() {
  const [pw, setPw] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const handleChangePw = e => setPw(e.target.value)

  useEffect(() => {
    if (pw.length >= 8) setIsDisabled(false)
    else setIsDisabled(true)
  }, [pw])

  return (
    <div className={styles.header}>
      비밀번호
      <input
        type="password"
        onChange={handleChangePw}
        placeholder="비밀번호 입력"
      />
      <div className={styles.footer}>
        {isDisabled && '8자 이상 입력해주세요'}
      </div>
    </div>
  )
}
