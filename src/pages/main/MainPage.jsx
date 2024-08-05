import { getResultPossible } from '@/apis/axios/getResultPossible'
import { useGetResult } from '@/apis/queries/useGetResult'
import ColorBar from '@/components/ColorBar'
import Modal from '@/components/Modal'
import { useStoreResultInStore } from '@/hooks/api/useStoreResultInStore'
import MainLayout from '@/layout/MainLayout'
import ResultBox from '@/pages/main/components/ResultBox'
import { useLoginStore } from '@/stores/loginStore'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function MainPage() {
  const [isModal, setIsModal] = useState(false)
  const [searchParams] = useSearchParams()
  const { data, isPending } = useGetResult({
    meetingId: searchParams.get('group'),
  })
  const storeData = useStoreResultInStore()
  const [possible, setPossible] = useState(null)
  const [meetingDayIdState, setMeetingDayIdState] = useState(0)
  const [possibleIdState, setPossibleIdState] = useState(0)
  const {
    isLogin,
    meetingId: loginMeetingId,
    meetingTitle: loginMeetingTitle,
  } = useLoginStore()
  const navigate = useNavigate()

  useEffect(() => {
    const [_group, _tag] = [searchParams.get('group'), searchParams.get('tag')]
    console.log(_group, _tag, isLogin, loginMeetingId, loginMeetingTitle)
    if (!isLogin || loginMeetingId !== _tag || loginMeetingTitle !== _group) {
      if (confirm('로그인을 하지 않으셨습니다. 로그인하러 갈까요?')) {
        navigate(`/login?group=${_group}&tag=${_tag}`)
      }
    }
  }, [])

  useEffect(() => {
    storeData(data)
  }, [data])

  const handleModalOpen = async (meetingDayId, possibleId) => {
    try {
      const modalData = await getResultPossible({
        meetingId: data?.meeting_id,
        meetingDayId,
        possibleId,
      })
      console.log(modalData)
      setPossible(modalData?.possible_people)
      setMeetingDayIdState(meetingDayId)
      setPossibleIdState(possibleId)
      setIsModal(true)
    } catch (error) {
      console.error('데이터를 불러오는 중 오류가 발생했습니다:', error)
    }
  }

  const handleModalClose = () => {
    setIsModal(false)
  }

  if (isPending) {
    return <div>로딩 중...</div>
  }

  return (
    <>
      {isModal && (
        <Modal
          closeModal={handleModalClose}
          possible={possible}
          meetingDayId={meetingDayIdState}
          possibleId={possibleIdState}
        />
      )}
      <MainLayout>
        <ResultBox handleModalOpen={handleModalOpen} />
        <ColorBar numOfGroupPeople={data?.all_people.length} />
      </MainLayout>
    </>
  )
}
