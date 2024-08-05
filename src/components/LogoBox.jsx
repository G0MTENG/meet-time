import styles from '@/styles/components/LogoBox.module.css'
import SelectLogo from '@/components/SelectLogo'
import LinkCopy from '@/components/LinkCopy'
import { useGroupPersistStore } from '@/stores/groupPersistStore'

export default function LogoBox() {
  const { meetingTitle } = useGroupPersistStore()
  console.log(meetingTitle)

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <SelectLogo />
      </div>
      <div className={styles.group}>{meetingTitle}</div>
      <div className={styles.link}>
        <LinkCopy />
      </div>
    </div>
  )
}
