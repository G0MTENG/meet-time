import IdInput from './IdInput'
import Button from './LoginButton'
import PwInput from './PwInput'
import styles from '@/styles/login/LoginInput.module.css'

const onSubmit = e => {
  e.preventDefault()
}

export default function LoginPage() {
  return (
    <div>
      <p className={styles.first_label}>LOGIN</p>
      <IdInput />
      <PwInput />
      <div className={styles.button}>
        <Button onSubmit={onSubmit}>로그인</Button>
      </div>
    </div>
  )
}
