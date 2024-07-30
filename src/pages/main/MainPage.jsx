import ColorBar from '@/components/ColorBar'
import Modal from '@/components/Modal'
import MainLayout from '@/layout/MainLayout'
import ResultBox from '@/pages/main/ResultBox'
import { useState } from 'react'

export default function MainPage() {
  const [isModal, setIsModal] = useState(true)
  const handleClose = () => {
    setIsModal(false)
  }

  return (
    <>
      {isModal && <Modal closeModal={handleClose} />}
      <MainLayout>
        <ResultBox />
        <ColorBar numOfGroupPeople={3} />
      </MainLayout>
    </>
  )
}
