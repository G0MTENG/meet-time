import { FaPaste } from 'react-icons/fa6'

export default function JoinInput({ value, set }) {
  const handleChange = e => {
    set(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="헤커톤#12321"
      />
      <FaPaste />
    </div>
  )
}
