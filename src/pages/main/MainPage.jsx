import ColorBar from '@/components/ColorBar'
import MainLayout from '@/layout/MainLayout'

export default function MainPage() {
  return (
    <MainLayout>
      <div>Helo</div>
      <ColorBar numOfGroupPeople={3} />
    </MainLayout>
  )
}
