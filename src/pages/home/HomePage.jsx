import Logo from '@/components/Logo'
import styles from '@/styles/home/HomePage.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  const timer = useEffect(() => {
    setTimeout(() => {
      navigate('/select')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Logo />
      </div>
    </div>
  )
}
