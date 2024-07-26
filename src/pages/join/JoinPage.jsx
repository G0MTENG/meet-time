import styles from '@/styles/join/JoinPage.module.css'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import { useNavigate } from 'react-router-dom'
import JoinInput from './components/JoinInput'
import { useState } from 'react'

export default function JoinPage() {
  const navigate = useNavigate()
  const [groupInput, setGroupInput] = useState('')

  const handleJoinClick = () => {
    if (!groupInput.includes('#')) {
      return
    }

    const [_groupName, _tag] = groupInput.split('#')
    navigate(`/login?group=${_groupName}&tag=${_tag}`)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <p>모임이름과 Tag를 입력해주세요!</p>
      <JoinInput value={groupInput} set={setGroupInput} />
      <Button onClick={handleJoinClick}>모입 입장</Button>
    </div>
  )
}
