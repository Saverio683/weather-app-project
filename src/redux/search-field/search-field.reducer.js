/* this reducer does not affect the Redux store because it is used in the useReducer hook
I put this inside this "redux" folder,even if it might not be the most appropriate place, because 
I didn't want to put everything inside the "search-field.component" file*/

import {SET_CITY_FIELD, SET_COUNTRY_FIELD } from './search-field.types';

export const INITIAL_STATE = {
    cityField: '',
    countryField: ''
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CITY_FIELD:
            return { ...state, cityField: action.payload }
        case SET_COUNTRY_FIELD:
            return { ...state, countryField: action.payload }
        default:
            return state
    }
}
