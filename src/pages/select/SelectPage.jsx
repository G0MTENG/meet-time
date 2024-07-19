import styles from '@/styles/select/SelectPage.module.css'
import Logo from '@/components/Logo'
import GroupNameInput from '@/components/GroupNameInput'
import SelectNavBar from '@/components/SelectNavBar'
import Button from '@/components/Button'
import useGroupCreate from '@/hooks/Button/handleGroupCreate'
import SelectRoutes from '@/routes/SelectRoutes'

export default function SelectPage() {
  const handleClick = useGroupCreate()

  return (
    <div className={styles.layout}>
      <div className={styles.imageWrapper}>
        <Logo />
      </div>
      <GroupNameInput />
      <SelectNavBar />
      <div className={styles.routes}>
        <SelectRoutes />
      </div>
      <Button handleClick={handleClick}>선택 완료</Button>
    </div>
  )
}
