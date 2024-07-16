import styles from '@/styles/timeSelect/LogoBox.module.css'
import SelectLogo from './SelectLogo'
import LinkCopy from '@/components/LinkCopy'
import useGroupNameStore from '@/stores/groupNameStore'

export default function LogoBox() {
  const { groupName } = useGroupNameStore()

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <SelectLogo />
      </div>
      <div className={styles.group}>GroupName: {groupName}</div>
      <div className={styles.link}>
        <LinkCopy />
      </div>
    </div>
  )
}
