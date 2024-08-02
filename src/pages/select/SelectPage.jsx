import MainLayout from '@/layout/MainLayout'
import TimeSelectDate from './date/TimeSelectDate'
import TimeSelectWeek from './week/TimeSelectWeek'
import Button from '@/components/Button'
import { GROUPTYPE } from '@/utils/groupType'
import { useGroupPersistStore } from '@/stores/groupPersistStore'

export default function SelectPage() {
  const { groupType } = useGroupPersistStore()

  return (
    <MainLayout>
      {groupType === GROUPTYPE.DATE ? <TimeSelectDate /> : <TimeSelectWeek />}
      <Button>선택 완료</Button>
    </MainLayout>
  )
}
