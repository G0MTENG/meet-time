export default function GroupNameInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="group-name">Group Name</label>
      <input id="group-name" type="text" value={value} onChange={onChange} />
    </div>
  )
}
