import styles from '@/styles/App.module.css'
import AppRoutes from '@/routes/AppRoutes'

export default function App() {
  return (
    <div className={styles.layout}>
      <AppRoutes />
    </div>
  )
}
