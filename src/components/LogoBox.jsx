import styles from '@/styles/components/LogoBox.module.css'
import SelectLogo from '@/components/SelectLogo'
import LinkCopy from '@/components/LinkCopy'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { useLocation } from 'react-router-dom'
import PossibleLogo from './PossibleLogo'

export default function LogoBox() {
  const { meetingTitle } = useGroupPersistStore()
  const path = useLocation()

  let logo = path.pathname === '/main' ? <PossibleLogo /> : <SelectLogo />

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>{logo}</div>
      <div className={styles.group}>{meetingTitle}</div>
      <div className={styles.link}>
        <LinkCopy />
      </div>
    </div>
  )
}
