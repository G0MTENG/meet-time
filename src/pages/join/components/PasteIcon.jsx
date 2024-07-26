import { FaPaste, FaRegCheckCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import styles from '@/styles/join/PasteIcon.module.css'

export default function PasteIcon({ set }) {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [isClicked])

  const handleIconClick = async () => {
    setIsClicked(true)
    try {
      const text = await navigator.clipboard.readText()
      set(text) // 클립보드 내용을 상위 컴포넌트의 state로 설정
    } catch (error) {
      console.error('Clipboard read failed', error)
    }
  }

  return (
    <div className={styles.pasteIcon} onClick={handleIconClick}>
      {isClicked ? (
        <FaRegCheckCircle className={styles.icon} />
      ) : (
        <FaPaste className={styles.icon} />
      )}
    </div>
  )
}
