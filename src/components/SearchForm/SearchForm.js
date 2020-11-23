import React, { useRef, useState } from 'react';

const SearchForm = (props) => {
    const { onSubmit } = props
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeOutRef = useRef(null)

    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current)
        }

        typingTimeOutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value
            }
            onSubmit(formValue)
        }, 800);


    }
    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </form>
    );
};

export default SearchForm;