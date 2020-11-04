import {useState} from 'react'

export const useFiled = (name) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const clear = () => {
        setValue('')
    }

    return {
        fields: {
            name,
            value,
            onChange,
            
        },
        clear
    }
}