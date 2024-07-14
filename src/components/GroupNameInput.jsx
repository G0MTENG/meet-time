import styles from '@/styles/components/GroupNameInput.module.css'

export default function GroupNameInput({ value, onChange }) {
  return (
    <input
      className={styles.groupInput}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="모임이름"
    />
  )
}
