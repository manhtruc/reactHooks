import React, { useState } from 'react';

const TodoForm = (props) => {
    const { onSubmitForm } = props

    const [value, setValue] = useState('')

    const handleValueChange = (e) => {
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formValues = {
            name: value
        }

        onSubmitForm(formValues)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleValueChange} />
        </form>
    );
};

export default TodoForm;