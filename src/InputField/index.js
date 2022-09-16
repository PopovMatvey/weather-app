import React, { useState } from 'react';
import './inputField.css';

export const InputField = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handeleOnChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <input onChange={handeleOnChange} value={inputValue} />
    );
}