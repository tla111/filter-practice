import React, { useState } from 'react'
import Select from 'react-select'

const DropdownMenu = () => {
    const [showSelectedOption, setShowSelectedOption] = useState({})
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const handleChange = (selectedOption) => {
        setShowSelectedOption(selectedOption)
    }

    return (
        <div>
            <h1>DropdownMenu</h1>
            <Select options={options} onChange={handleChange} />
            <h2>Ice Cream: {showSelectedOption.value.charAt(0).toUpperCase() + showSelectedOption.value.slice(1)}</h2>
        </div>
    )
}

export default DropdownMenu