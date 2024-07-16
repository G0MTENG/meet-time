import useGroupNameStore from '@/stores/groupNameStore'
import styles from '@/styles/components/GroupNameInput.module.css'

export default function GroupNameInput() {
  const { inputName, setInputName } = useGroupNameStore()

  const handleChange = e => {
    setInputName(e.target.value)
  }

  return (
    <input
      className={styles.groupInput}
      type="text"
      value={inputName}
      onChange={handleChange}
      placeholder="모임이름"
    />
  )
}
