import styles from '@/styles/login/LoginInput.module.css'

export default function PwInput({ value, onChange }) {
  return (
    <div className={styles.header}>
      <p className={styles.input_header}>비밀번호</p>
      <input
        type="password"
        value={value}
        onChange={onChange}
        placeholder="비밀번호 입력"
      />
    </div>
  )
}
