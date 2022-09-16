import React, { memo } from "react";

import '../CardList/cardList.css'

import { Card } from '../Card'

export const CardList = memo(({ citiesList, dispatch }) => {

    return (
        <div className="card-list">
            {
                citiesList.map(city => <Card key={city} city={city} dispatch={dispatch} />)
            }
        </div>
    );
});