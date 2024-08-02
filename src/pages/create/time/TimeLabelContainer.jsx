import styles from '@/styles/create/TimeLabelContainer.module.css'

export default function TimeLabelContainer({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div className={styles.timelabel}>
      <p className={styles.label}>{label}</p>
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
