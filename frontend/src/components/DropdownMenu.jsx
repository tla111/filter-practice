import React, { useState } from 'react'
import Select from 'react-select'

const DropdownMenu = () => {
    const [showSelectedOption, setShowSelectedOption] = useState({})
    const [show, setShow] = useState(false)
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const handleChange = (selectedOption) => {
        setShowSelectedOption(selectedOption)
        setShow(true)
    }

    return (
        <div>
            <h1>Dropdown Menu</h1>
            <Select options={options} onChange={handleChange} isMulti />
            {/* {show && <h2>Ice Cream: {showSelectedOption.value.charAt(0).toUpperCase() + showSelectedOption.value.slice(1)}</h2>} */}
        </div>
    )
}

export default DropdownMenu