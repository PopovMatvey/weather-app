import { useEffect, useReducer } from 'react';

const initialState = {
    inputValue: '',
    editingCity: '',
    citiesList: JSON.parse(localStorage.getItem('citiesList')) || [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            return { ...state, citiesList: [...state.citiesList, action.payload] };
        }

        case 'DELETE_CITY': {
            return { ...state, citiesList: state.citiesList.filter(el => el !== action.payload) };
        }

        case 'EDIT_CITY': {
            return { ...state, inputValue: action.payload, editingCity: action.payload };
        }

        case 'UPDATE_CITY': {
            const { editingCity } = state;

            return {
                ...state,
                citiesList: [
                    ...state.citiesList.filter(el => el !== editingCity)
                    , action.payload
                ],
                inputValue: initialState.inputValue,
                editingCity: initialState.editingCity,
            }
        }

        case 'CHANGE_INPUT_VALUE': {
            return { ...state, inputValue: action.payload };;
        }

        case 'RESET_INPUT_VALUE': {
            return { ...state, inputValue: initialState.inputValue, editingCity: initialState.editingCity  };
        }

        default:
            return initialState;
    }
}

export const useCitiesList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { citiesList } = state;

    useEffect(() => {
        localStorage.setItem('citiesList', JSON.stringify(citiesList));
    }, [citiesList]);

    return [state, dispatch];
}