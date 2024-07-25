import styles from '@/styles/App.module.css'
import AppRoutes from '@/routes/routes'

export default function App() {
  return (
    <div className={styles.layout}>
      <AppRoutes />
    </div>
  )
}
