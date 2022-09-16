import React, { memo } from 'react';

import './card.css';

import { useWeather } from '../Hooks/useWeather';

export const Card = memo(({ city, dispatch }) => {
    const data = useWeather(city);

    if (!data) return null;

    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;

    const handleOnClickDeliteCity = () => {
        dispatch({
            type: 'DELETE_CITY',
            payload: city,
        })
    }

    const handleOnClickEditCity = () => {
        dispatch({
            type: 'EDIT_CITY',
            payload: city,
        })
    }

    return (
        <div className="card-wrap">
            <div className='card-wrap_button'>
                <button onClick={handleOnClickEditCity}>Edit</button>
                <button onClick={handleOnClickDeliteCity}>X</button>
            </div>
            <div className='card-wrap_info'>
                <img className='card-wrap_info__icon' src={`http://openweathermap.org/img/wn/${icon}.png`} alt='icon' />
                <div className='card-wrap_info__title'>{name}</div>
                <div className='card-wrap_info__description'>{description}</div>
                <div className='card-wrap_info__temprature'>{temp.toFixed()}</div>
            </div>
            <div className='card-wrap_mainInformation'>
                <div>Humidity: {humidity}</div>
                <div>Feels like: {feels_like}</div>
            </div>
        </div>
    );
})
