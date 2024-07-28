import styles from '@/styles/components/LogoBox.module.css'
import SelectLogo from '@/components/LogoBox'
import LinkCopy from '@/components/LinkCopy'
import useGroupStore from '@/stores/groupStore'

export default function LogoBox() {
  const { groupName } = useGroupStore()

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
