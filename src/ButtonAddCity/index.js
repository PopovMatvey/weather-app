import React from 'react';

import './buttonAddCity.css';

export const ButtonAddCity = () => {
    const currentDate = new Date().toDateString();

    const handleOnClick = (value) => (event) => {
        console.log("button was clicked in", value);
    }

    return (
        <button onClick={handleOnClick(currentDate)} id='buttonField'>+</button>
    );
}