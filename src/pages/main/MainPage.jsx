import ColorBar from '@/components/ColorBar'
import MainLayout from '@/layout/MainLayout'
import ResultBox from '@/pages/main/ResultBox'

export default function MainPage() {
  return (
    <MainLayout>
      <ResultBox />
      <ColorBar numOfGroupPeople={3} />
    </MainLayout>
  )
}
