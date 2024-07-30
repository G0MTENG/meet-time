import styles from '@/styles/login/LoginInput.module.css'

export default function IdInput({ value, onChange }) {
  return (
    <div className={styles.header}>
      <p className={styles.input_header}>이름</p>
      <input
        className={styles.inputcontent}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="이름 입력"
      />
    </div>
  )
}
