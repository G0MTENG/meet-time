import styles from '@/styles/join/JoinPage.module.css'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import JoinInput from './components/JoinInput'
import { useState } from 'react'
import { useHandleJoinClick } from '@/hooks/eventHandler/useHandleJoinClick'

export default function JoinPage() {
  const [groupInput, setGroupInput] = useState('')
  const [error, setError] = useState('')
  const handleJoinClickHandler = useHandleJoinClick()

  const handleJoinClick = () => {
    handleJoinClickHandler(groupInput, setError)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <p>모임이름과 Tag를 입력해주세요!</p>
      <JoinInput value={groupInput} set={setGroupInput} />
      <div className={styles.error}>{error}</div>
      <Button onClick={handleJoinClick}>모입 입장</Button>
    </div>
  )
}
