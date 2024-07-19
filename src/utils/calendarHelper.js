const pickDate = (state, date) => {
  const dates = state.dates || [] // Ensure state.dates is an array
  const dateString = date.toDateString()

  let newDates
  if (dates.some(d => d.toDateString() === dateString)) {
    newDates = dates.filter(d => d.toDateString() !== dateString)
  } else {
    newDates = [...dates, date]
  }

  newDates.sort((a, b) => a - b)

  return {
    dates: newDates,
  }
}

export { pickDate }
