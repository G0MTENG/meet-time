import IdInput from './IdInput'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import PwInput from './PwInput'
import styles from '@/styles/login/LoginInput.module.css'
import { useState } from 'react'
import { useEnterLoginFirst } from '@/hooks/api/useEnterLoginFirst'
import { useLogin } from '@/apis/queries/useLogin'
import { useGroupPersistStore } from '@/stores/groupPersistStore'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, _] = useState('')
  useEnterLoginFirst()
  const { mutate: loginMutate } = useLogin()
  const { meetingId } = useGroupPersistStore()

  const handleLogin = () => {
    loginMutate({ id: meetingId, nickname: username, password })
  }

  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <p className={styles.first_label}>LOGIN</p>
        <IdInput value={username} onChange={e => setUsername(e.target.value)} />
        <PwInput value={password} onChange={e => setPassword(e.target.value)} />
        {error && (
          <p className={styles.error} style={{ color: 'red' }}>
            {error}
          </p>
        )}
        <div className={styles.button}>
          <Button onClick={handleLogin}>로그인</Button>
        </div>
      </div>
    </div>
  )
}
