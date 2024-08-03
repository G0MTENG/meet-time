import { useGetResult } from '@/apis/queries/useGetResult'
import ColorBar from '@/components/ColorBar'
import Modal from '@/components/Modal'
import { useStoreResultInStore } from '@/hooks/api/useStoreResultInStore'
import MainLayout from '@/layout/MainLayout'
import ResultBox from '@/pages/main/components/ResultBox'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function MainPage() {
  const [isModal, setIsModal] = useState(false)
  const [searchParams] = useSearchParams()
  const { data, isPending } = useGetResult({
    meetingId: searchParams.get('group'),
  })
  const storeData = useStoreResultInStore()

  useEffect(() => {
    storeData(data)
  }, [data])

  const handleModalClose = () => {
    setIsModal(false)
  }

  const handleModalOpen = (row, idx) => {
    console.log(row, idx)
    setIsModal(true)
  }

  if (isPending) {
    return <div>로딩 중...</div>
  }

  return (
    <>
      {isModal && <Modal closeModal={handleModalClose} />}
      <MainLayout>
        <ResultBox handleModalOpen={handleModalOpen} />
        <ColorBar numOfGroupPeople={data?.all_people.length} />
      </MainLayout>
    </>
  )
}
