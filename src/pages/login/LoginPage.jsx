import IdInput from './IdInput'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import PwInput from './PwInput'
import styles from '@/styles/login/LoginInput.module.css'
import { useEffect, useState } from 'react'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { GROUPTYPE } from '@/utils/groupType'
import { useSearchParams } from 'react-router-dom'
import { getJoin } from '@/apis/axios/getJoin'
import { useGroupDataStore } from '@/hooks/api/useGroupDataStore'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { meetingType } = useGroupPersistStore()
  const [searchParams, _] = useSearchParams()
  const storeRequest = useGroupDataStore()

  useEffect(() => {
    if (meetingType === GROUPTYPE.NONE) {
      const [_group, _tag] = [
        searchParams.get('group'),
        searchParams.get('tag'),
      ]
      ;(async function (group, tag) {
        const res = await getJoin(group, tag)
        storeRequest(res)
      })(_group, _tag)
    }
  }, [])

  const handleLogin = () => {
    if (username === 'correctUsername' && password === 'correctPassword') {
      console.log('Login successful')
      setError('')
    } else {
      setError('잘못된 이름 또는 비밀번호입니다.')
    }
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
