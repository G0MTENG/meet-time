import { useEffect, useState } from 'react'
import { FaPaste } from 'react-icons/fa6'
import { FaRegCheckCircle } from 'react-icons/fa'
import styles from '@/styles/join/PasteIcon.module.css'

export default function PasteIcon() {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [isClicked])

  const handleIconClick = () => {
    setIsClicked(true)
  }

  return (
    <div className={styles.pasteIcon}>
      {isClicked ? (
        <FaRegCheckCircle className={styles.icon} />
      ) : (
        <FaPaste className={styles.icon} onClick={handleIconClick} />
      )}
    </div>
  )
}
