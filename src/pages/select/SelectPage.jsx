import MainLayout from '@/layout/MainLayout'
import useGroupStore, { GROUPTYPE } from '@/stores/groupStore'
import React from 'react'
import TimeSelectDate from './date/TimeSelectDate'
import TimeSelectWeek from './week/TimeSelectWeek'
import Button from '@/components/Button'

export default function SelectPage() {
  const { groupType } = useGroupStore()

  return (
    <MainLayout>
      {groupType === GROUPTYPE.DATE ? <TimeSelectDate /> : <TimeSelectWeek />}
      <Button>선택 완료</Button>
    </MainLayout>
  )
}
