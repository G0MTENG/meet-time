import { useState, useEffect } from 'react'

export default function useModalHandler(boxRef, closeModal) {
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)

  const animateModalClose = () => {
    boxRef.current.style.transition = 'transform 0.5s ease-in'
    boxRef.current.style.transform = 'translateY(100vh)'
    boxRef.current.addEventListener('transitionend', closeModal, { once: true })
  }

  const handleDragStart = position => {
    setIsDragging(true)
    setStartY(position)
    boxRef.current.style.transition = 'none' // Disable transitions during drag
  }

  const handleDragMove = position => {
    if (isDragging && boxRef.current) {
      const diffY = position - startY
      boxRef.current.style.transform = `translateY(${Math.max(diffY, 0)}px)`
    }
  }

  const handleDragEnd = () => {
    if (isDragging && boxRef.current) {
      const transformValue = parseInt(
        boxRef.current.style.transform
          .replace('translateY(', '')
          .replace('px)', ''),
        10,
      )
      if (transformValue > window.innerHeight * 0.25) {
        animateModalClose()
      } else {
        boxRef.current.style.transition = 'transform 0.5s ease-out'
        boxRef.current.style.transform = '' // Reset position
      }
    }
    setIsDragging(false)
  }

  // Touch Events
  const handleTouchStart = e => {
    e.preventDefault()
    handleDragStart(e.touches[0].clientY)
  }

  const handleTouchMove = e => {
    e.preventDefault()
    handleDragMove(e.touches[0].clientY)
  }

  const handleTouchEnd = e => {
    e.preventDefault()
    handleDragEnd()
  }

  // Mouse Events
  const handleMouseDown = e => handleDragStart(e.clientY)
  const handleMouseMove = e => {
    if (isDragging) {
      handleDragMove(e.clientY)
    }
  }
  const handleMouseUp = () => handleDragEnd()

  useEffect(() => {
    const box = boxRef.current
    if (box) {
      // Touch events
      box.addEventListener('touchstart', handleTouchStart)
      box.addEventListener('touchmove', handleTouchMove)
      box.addEventListener('touchend', handleTouchEnd)
      // Mouse events
      box.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      if (box) {
        box.removeEventListener('touchstart', handleTouchStart)
        box.removeEventListener('touchmove', handleTouchMove)
        box.removeEventListener('touchend', handleTouchEnd)
        box.removeEventListener('mousedown', handleMouseDown)
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging]) // Depend on isDragging to rebind event listeners only when it changes
}
