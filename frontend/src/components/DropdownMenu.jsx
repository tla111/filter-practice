import React from 'react'
import Select from 'react-select'

const DropdownMenu = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div>
            <h1>DropdownMenu</h1>
            <Select options={options} />
        </div>
    )
}

export default DropdownMenu