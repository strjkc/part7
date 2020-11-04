import {useState} from 'react'

export const useFiled = (name) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        name,
        value,
        onChange
    }
}