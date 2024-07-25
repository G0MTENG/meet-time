import Button from '@/components/Button'
import Logo from '@/components/Logo'
import styles from '@/styles/home/HomePage.module.css'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Logo />
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => navigate('/create/date')}>모임 생성</Button>
        <Button onClick={() => navigate('/create/week')}>모임 입장</Button>
      </div>
    </div>
  )
}
