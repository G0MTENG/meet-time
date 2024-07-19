import { useLocation, useNavigate } from 'react-router-dom'
import styles from '@/styles/components/SelectNavBar.module.css'

export default function SelectNavBar() {
  const path = useLocation().pathname
  const navigate = useNavigate()

  const handleDate = () => {
    if (path === '/select/date') {
      return
    }

    navigate('/select/date')
  }

  const handleWeek = () => {
    if (path === '/select/week') {
      return
    }

    navigate('/select/week')
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <div
          onClick={handleDate}
          className={path === '/select/date' ? styles.active : undefined}
        >
          날짜
        </div>
        <div
          onClick={handleWeek}
          className={path === '/select/week' ? styles.active : undefined}
        >
          주간
        </div>
      </nav>
      <hr className={styles.hr} />
    </div>
  )
}
