import styles from '@/styles/App.module.css'
import AppRoutes from '@/routes/routes'
import { BrowserView, MobileView } from 'react-device-detect'

export default function App() {
  return (
    <>
      <MobileView className={styles.layout}>
        <AppRoutes />
      </MobileView>
      <BrowserView className={`${styles.layout} ${styles.pc}`}>
        <AppRoutes />
      </BrowserView>
    </>
  )
}
