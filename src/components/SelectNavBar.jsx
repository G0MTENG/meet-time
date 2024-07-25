import { useLocation, useNavigate } from 'react-router-dom'
import styles from '@/styles/components/SelectNavBar.module.css'

export default function SelectNavBar() {
  const path = useLocation().pathname
  const navigate = useNavigate()

  const handleDate = () => {
    if (path === '/create/date') {
      return
    }

    navigate('/create/date')
  }

  const handleWeek = () => {
    if (path === '/create/week') {
      return
    }

    navigate('/create/week')
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <div
          onClick={handleDate}
          className={path === '/create/date' ? styles.active : undefined}
        >
          날짜
        </div>
        <div
          onClick={handleWeek}
          className={path === '/create/week' ? styles.active : undefined}
        >
          주간
        </div>
      </nav>
      <hr className={styles.hr} />
    </div>
  )
}
