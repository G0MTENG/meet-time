import styles from '@/styles/join/JoinPage.module.css'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import { useNavigate } from 'react-router-dom'
import JoinInput from './components/JoinInput'
import { useState } from 'react'

export default function JoinPage() {
  const navigate = useNavigate()
  const [groupInput, setGroupInput] = useState('')
  const [error, setError] = useState('')

  const errorMsg = '잘못된 입력입니다. 다시 시도해주세요.'

  const handleJoinClick = () => {
    if (!groupInput) {
      return
    }

    const [_groupName, _tag] = groupInput.split('#')
    if (!_tag || !_groupName) {
      setError(errorMsg)
      return
    }

    navigate(`/login?group=${_groupName}&tag=${_tag}`)
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
