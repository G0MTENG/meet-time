import styles from '@/styles/components/LinkCopy.module.css'
import { IoLinkSharp } from 'react-icons/io5'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function LinkCopy() {
  const path = useLocation()
  const [serchParams] = useSearchParams()

  const handleCopyClick = () => {
    const pathname = `${path.pathname}${path.search}`
    navigator.clipboard.writeText(`https://meet-time-rho.vercel.app${pathname}`)
    alert('복사되었습니다')
  }

  return (
    <div className={styles.copy} onClick={handleCopyClick}>
      <IoLinkSharp className={styles.icon} />
      <div
        className={styles.text}
      >{`${serchParams.get('group')}#${serchParams.get('tag')}`}</div>
    </div>
  )
}
