import MainLayout from '@/layout/MainLayout'
import TimeSelectDate from '@/pages/select/components/TimeSelectDate'
import Button from '@/components/Button'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { useGetSelect } from '@/apis/queries/useGetSelect'
import { useUpdateSelectTime } from '@/apis/queries/useUpdateSelectTime'
import { useEffect, useState } from 'react'

export default function SelectPage() {
  const { meetingStartTime, meetingEndTime, meetingId, userId, meetingDayId } =
    useGroupPersistStore()
  const { data, isPending } = useGetSelect({ meetingId, userId })
  const { isPending: postPending, mutate } = useUpdateSelectTime()
  const [listState, setListState] = useState(null)
  const [possible, setPossible] = useState([])
  const [index, setIndex] = useState(0)
  const [keys, setKeys] = useState(null)

  useEffect(() => {
    if (!isPending && data) {
      setListState(data.possible_list)
      setKeys(Object.keys(data.possible_list).map(ele => +ele))
    }
  }, [data, isPending])

  useEffect(() => {
    if (listState) {
      setPossible(listState[keys[index]] || [])
    }
  }, [listState, keys, index])

  const handleButtonClick = () => {
    const updatedList = { ...listState }
    updatedList[Object.keys(data?.possible_list).map(ele => +ele)[index]] =
      possible
    console.log(updatedList)
    setListState(updatedList)

    mutate({
      meetingId,
      userId,
      meetingDayId,
      possibleList: listState,
    })
  }

  if (isPending) {
    return <div>잠시만 기다려주세요</div>
  }

  return (
    <MainLayout>
      <TimeSelectDate
        listState={listState}
        setListState={setListState}
        keys={keys}
        start={meetingStartTime}
        end={meetingEndTime}
        possible={possible}
        setPossible={setPossible}
        index={index}
        setIndex={setIndex}
      />
      {postPending ? (
        <Button>대기 중...</Button>
      ) : (
        <Button onClick={handleButtonClick}>선택 완료</Button>
      )}
    </MainLayout>
  )
}
