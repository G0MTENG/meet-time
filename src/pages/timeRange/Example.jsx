import { options } from './Example'
const times = ['9:00', '9:30','10:00']

const options = times.map(ele => {
    return ( label: ele, value: ele)
})

export {options}