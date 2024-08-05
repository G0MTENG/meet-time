import LogoImg from '@/assets/possible_logo.svg'
import styles from '@/styles/main/PossibleLogo.module.css'
import { IoIosArrowBack } from 'react-icons/io'

export default function PossibleLogo() {
  return (
    <>
      <IoIosArrowBack className={styles.icon} />
      <img className={styles.img} src={LogoImg} />
    </>
  )
}
