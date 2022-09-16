import React from 'react';

import './App.css';

import { WrapInputField } from './WrapInputField';
import { CardList } from './CardList';
import { useCitiesList } from './Hooks/useCitiesList.js'

function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editingCity } = state;

  return (
    <div className="main">
      <header>
        <WrapInputField dispatch={dispatch} citiesList={citiesList} inputValue={inputValue} editingCity={editingCity} />
      </header>
      <CardList dispatch={dispatch} citiesList={citiesList} />
    </div>
  );
}

export default App;
