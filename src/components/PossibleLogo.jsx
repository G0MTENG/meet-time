import LogoImg from '@/assets/possible_logo.svg'
import { useClickNavSelect } from '@/hooks/eventHandler/useClickNavSelect'
import styles from '@/styles/main/PossibleLogo.module.css'
import { IoIosArrowBack } from 'react-icons/io'

export default function PossibleLogo() {
  const handler = useClickNavSelect()
  return (
    <>
      <IoIosArrowBack className={styles.icon} onClick={handler} />
      <img className={styles.img} src={LogoImg} />
    </>
  )
}
