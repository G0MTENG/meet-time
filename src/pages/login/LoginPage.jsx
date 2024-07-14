import IdInput from './IdInput'
import LoginButton from './LoginButton'
import PwInput from './PwInput'
import styles from '@/styles/login/LoginInput.module.css'

export default function LoginPage() {
  return (
    <div>
      <p className={styles.first_label}>LOGIN</p>
      <IdInput />
      <PwInput />
      <LoginButton />
    </div>
  )
}
