import styles from '@/styles/create/TimeRange.module.css'

export default function TimeLabelContainer({ value, onChange, options }) {
  return (
    <div className={styles.timelabel}>
      <p className={styles.label}>시작 시간</p>
      <select onChange={onChange} value={value} className={styles.input}>
        {options.map((option, idx) => (
          <option key={idx} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
