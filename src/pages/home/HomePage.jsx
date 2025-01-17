import Button from '@/components/Button'
import Logo from '@/components/Logo'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { useLoginStore } from '@/stores/loginStore'
import styles from '@/styles/home/HomePage.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()
  const { initial } = useGroupPersistStore()
  const { loginInit } = useLoginStore()
  useEffect(() => {
    initial()
    loginInit()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Logo />
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => navigate('/create/date')}>모임 생성</Button>
        <Button onClick={() => navigate('/join')}>모임 입장</Button>
      </div>
    </div>
  )
}
