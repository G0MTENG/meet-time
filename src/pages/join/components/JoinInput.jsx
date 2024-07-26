import styles from '@/styles/join/JoinInput.module.css'
import PasteIcon from './PasteIcon'

export default function JoinInput({ value, set }) {
  const handleChange = e => {
    set(e.target.value)
  }

  return (
    <div className={styles.button}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="헤커톤#12321"
      />
      <PasteIcon />
    </div>
  )
}
