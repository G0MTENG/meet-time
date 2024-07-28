import styles from '@/styles/layout/MainLayout.module.css'
import LogoBox from '@/components/LogoBox'

export default function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <LogoBox />
      {children}
    </div>
  )
}
