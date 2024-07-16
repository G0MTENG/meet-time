import useGroupNameStore from '@/stores/groupNameStore'
import styles from '@/styles/components/GroupNameInput.module.css'

export default function GroupNameInput() {
  const { groupName, setGroupName } = useGroupNameStore()

  const handleChange = e => {
    setGroupName(e.target.value)
  }

  return (
    <input
      className={styles.groupInput}
      type="text"
      value={groupName}
      onChange={handleChange}
      placeholder="모임이름"
    />
  )
}
