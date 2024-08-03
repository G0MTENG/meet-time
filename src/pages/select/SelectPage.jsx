import MainLayout from '@/layout/MainLayout'
import TimeSelectDate from './date/TimeSelectDate'
import TimeSelectWeek from './week/TimeSelectWeek'
import Button from '@/components/Button'
import { GROUPTYPE } from '@/utils/groupType'
import { useGroupPersistStore } from '@/stores/groupPersistStore'
import { useGetSelect } from '@/apis/queries/useGetSelect'

export default function SelectPage() {
  const { meetingType, meetingStartTime, meetingEndTime, meetingId, userId } =
    useGroupPersistStore()
  const { data, isPending } = useGetSelect({ meetingId, userId })

  if (isPending) {
    return <div>잠시만 기다려주세요</div>
  }

  return (
    <MainLayout>
      <TimeSelectDate
        list={data?.possible_list}
        keys={Object.keys(data?.possible_list).map(ele => +ele)}
        start={meetingStartTime}
        end={meetingEndTime}
      />
      {/* {meetingType === GROUPTYPE.DATE ? (
        <TimeSelectDate
          list={data?.possible_list}
          keys={Object.keys(data?.possible_list).map(ele => +ele)}
          start={meetingStartTime}
          end={meetingEndTime}
        />
      ) : (
        <TimeSelectWeek
          list={data?.possible_list}
          keys={Object.keys(data?.possible_list).map(ele => +ele)}
          start={meetingStartTime}
          end={meetingEndTime}
        />
      )} */}
      <Button>선택 완료</Button>
    </MainLayout>
  )
}
