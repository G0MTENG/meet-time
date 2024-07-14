import styles from '@/styles/login/LoginInput.module.css'
import { useEffect, useState } from 'react'

export default function IdInput() {
  const [id, setId] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const handleChangeId = e => setId(e.target.value)

  useEffect(() => {
    if (id.length >= 1) setIsDisabled(false)
    else setIsDisabled(true)
  }, [id])

  return (
    <div className={styles.header}>
      <p>아이디</p>
      <input type="text" onChange={handleChangeId} placeholder="아이디 입력" />
      <div className={styles.footer}>
        {isDisabled && '아이디를 입력해주세요'}
      </div>
    </div>
  )
}
