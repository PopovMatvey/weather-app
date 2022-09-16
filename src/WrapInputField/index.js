import React, { useRef } from 'react';

import './wrapInputField.css';
import '../InputField/inputField.css';
import '../ButtonAddCity/buttonAddCity.css';

import { useWeather } from '../Hooks/useWeather';

export const WrapInputField = ({ dispatch, citiesList, inputValue, editingCity }) => {
    const notificationSpan = document.querySelector('#notification');
    const inputreference = useRef(null);
    const data = useWeather(inputValue);

    const handleOnClickAddCity = () => {
        if (data.name !== undefined) {
            notificationSpan.innerHTML = "";

            if (!citiesList.includes(data.name)) {
                dispatch({
                    type: 'ADD_CITY',
                    payload: data.name,
                })
            } else {
                notificationSpan.innerHTML = "This city already exists.";
            }
        } else {
            notificationSpan.innerHTML = "No such city";
        }

        dispatch({
            type: 'RESET_INPUT_VALUE',
        });

        inputreference.current.focus();
    }

    const handeleOnChange = (event) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: event.target.value,
        });
    }

    const handleOnClickUpdateCity = () => {
        if (data.name !== undefined) {
            notificationSpan.innerHTML = "";

            if (!citiesList.includes(data.name)) {
                dispatch({
                    type: 'UPDATE_CITY',
                    payload: data.name,
                })
            } else {
                notificationSpan.innerHTML = "This city already exists.";
            }
        } else {
            notificationSpan.innerHTML = "No such city";
        }

        dispatch({
            type: 'RESET_INPUT_VALUE',
        });

        inputreference.current.focus();
    }

    const heandlerCanselUpdateButton = () => {
        if (data.name !== undefined) {
            notificationSpan.innerHTML = "";

            if (!citiesList.includes(data.name)) {
                dispatch({
                    type: 'UPDATE_CITY',
                    payload: data.name,
                })
            }
        }

        dispatch({
            type: 'RESET_INPUT_VALUE',
        });

        inputreference.current.focus();
    }

    return (
        <div className='common-input'>
            {
                editingCity ?
                    <h3>Update city</h3>
                    :
                    <h3>Add city</h3>
            }
            <div className="input-wrap">
                <input onChange={handeleOnChange} value={inputValue} ref={inputreference} />
                {
                    editingCity ?
                        <button onClick={handleOnClickUpdateCity}>update</button>
                        :
                        <button onClick={handleOnClickAddCity}>+</button>
                }
            </div>
            <div className='tools-area'>
                <span id='notification'></span>
                {
                    editingCity ?
                        <button className='common-input_cansel-button' onClick={heandlerCanselUpdateButton}>Canсel update</button>
                        :
                        <></>
                }
            </div>
        </div>
    );
}



