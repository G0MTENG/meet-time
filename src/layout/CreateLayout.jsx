import styles from '@/styles/layout/CreateLayout.module.css'
import Logo from '@/components/Logo'
import GroupNameInput from '@/components/GroupNameInput'
import SelectNavBar from '@/components/SelectNavBar'
import Button from '@/components/Button'
import useGroupCreate from '@/hooks/Button/handleGroupCreate'
import { Outlet } from 'react-router-dom'

export default function CreateLayout() {
  const handleClick = useGroupCreate()

  return (
    <div className={styles.layout}>
      <div className={styles.imageWrapper}>
        <Logo />
      </div>
      <GroupNameInput />
      <SelectNavBar />
      <div className={styles.routes}>
        <Outlet />
      </div>
      <Button onClick={handleClick}>선택 완료</Button>
    </div>
  )
}
