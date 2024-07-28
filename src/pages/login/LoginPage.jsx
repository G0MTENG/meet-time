import IdInput from './IdInput'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import PwInput from './PwInput'
import styles from '@/styles/login/LoginInput.module.css'

const onSubmit = e => {
  e.preventDefault()
}

export default function LoginPage() {
  return (
    <div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <p className={styles.first_label}>LOGIN</p>
        <IdInput />
        <PwInput />
        <div className={styles.button}>
          <Button onSubmit={onSubmit}>로그인</Button>
        </div>
      </div>
    </div>
  )
}
