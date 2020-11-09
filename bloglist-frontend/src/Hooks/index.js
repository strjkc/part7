import { useState } from 'react'

export const useCreation = (type) => {
    const [value, setValue] = useState('')
    
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const clear = () => {
        setValue('')
    }

    return [
        value,
        {
            type,
            value,
            onChange,
        },
        clear
        
    ]
}
