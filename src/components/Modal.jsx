import styles from '@/styles/components/Modal.module.css'
import React, { useState, useRef, useEffect } from 'react'

export default function Modal({ closeModal }) {
  const boxRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [lastY, setLastY] = useState(0)

  const handleDragStart = e => {
    setIsDragging(true)
    setLastY(e.touches[0].clientY)
    e.preventDefault()
  }

  const handleDragging = e => {
    e.preventDefault()
    if (isDragging && boxRef.current) {
      const currentY = e.touches[0].clientY
      const diffY = currentY - lastY
      boxRef.current.style.transform = `translateY(${Math.max(diffY, 0)}px)`
    }
  }

  const handleDragEnd = () => {
    if (isDragging && boxRef.current) {
      // 사용자가 충분히 드래그 했는지 확인
      const transformValue = parseInt(
        boxRef.current.style.transform.replace('translateY(', ''),
      )
      if (transformValue > 200) {
        closeModal()
      } else {
        // 위치 초기화
        boxRef.current.style.transform = ''
      }
    }
    setIsDragging(false)
  }

  useEffect(() => {
    const box = boxRef.current
    if (box) {
      box.addEventListener('touchmove', handleDragging)
      box.addEventListener('touchend', handleDragEnd)
    }

    return () => {
      if (box) {
        box.removeEventListener('touchmove', handleDragging)
        box.removeEventListener('touchend', handleDragEnd)
      }
    }
  }, [isDragging])

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.box} ref={boxRef}>
        <div className={styles.handler} onTouchStart={handleDragStart} />
      </div>
    </div>
  )
}
