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
  const [listState, setListState] = useState(data?.possible_list)

  useEffect(() => {
    if (!isPending && data) {
      setListState(data.possible_list)
    }
  }, [data, isPending])

  const handleButtonClick = () => {
    console.log(
      meetingStartTime,
      meetingEndTime,
      meetingId,
      userId,
      meetingDayId,
      listState,
    )
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
        keys={Object.keys(data?.possible_list).map(ele => +ele)}
        start={meetingStartTime}
        end={meetingEndTime}
      />
      {postPending ? (
        <Button>대기 중...</Button>
      ) : (
        <Button onClick={handleButtonClick}>선택 완료</Button>
      )}
    </MainLayout>
  )
}
