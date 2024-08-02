import MainLayout from '@/layout/MainLayout'
import useGroupStore from '@/stores/groupStore'
import React from 'react'
import TimeSelectDate from './date/TimeSelectDate'
import TimeSelectWeek from './week/TimeSelectWeek'
import Button from '@/components/Button'
import { GROUPTYPE } from '@/utils/groupType'

export default function SelectPage() {
  const { groupType } = useGroupStore()

  return (
    <MainLayout>
      {groupType === GROUPTYPE.DATE ? <TimeSelectDate /> : <TimeSelectWeek />}
      <Button>선택 완료</Button>
    </MainLayout>
  )
}
