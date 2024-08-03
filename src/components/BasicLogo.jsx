import LogoImg from '@/assets/basic_logo.svg'
import styles from '@/styles/components/Img.module.css'

export default function BasicLogo() {
  return <img className={styles.img} src={LogoImg} />
}
