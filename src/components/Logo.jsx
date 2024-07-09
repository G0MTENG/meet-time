import LogoImg from '@/assets/logo.svg'
import styles from '@/styles/components/Logo.module.css'

export default function Logo() {
  return <img className={styles.img} src={LogoImg} />
}
