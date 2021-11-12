import axios from 'axios';

import { 
    FETCH_CURRENT_DATA_REQUEST,
    FETCH_CURRENT_DATA_SUCCESS,
    FETCH_CURRENT_DATA_FAILURE,
    FETCH_DAILY_DATA_REQUEST,
    FETCH_DAILY_DATA_SUCCESS,
    FETCH_DAILY_DATA_FAILURE
 } from './data.types';

export const fetchCurrentDataRequest = () => ({
    type: FETCH_CURRENT_DATA_REQUEST,
});

export const fetchCurrentDataSuccess = data => ({
    type: FETCH_CURRENT_DATA_SUCCESS,
    payload: data
});

export const fetchCurrentDataFailure = error => ({
    type: FETCH_CURRENT_DATA_FAILURE,
    payload: error 
});

export const fetchDailyDataRequest = () => ({
    type: FETCH_DAILY_DATA_REQUEST,
});

export const fetchDailyDataSuccess = data => ({
    type: FETCH_DAILY_DATA_SUCCESS,
    payload: data
});

export const fetchDailyDataFailure = error => ({
    type: FETCH_DAILY_DATA_FAILURE,
    payload: error
});

export const fetchData = (cityField, countryField) => {
    return (dispatch) => {
        dispatch(fetchCurrentDataRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityField},${countryField}&units=metric&appid=17e57c3ab6fdc68fb851ae80c2f9c4b6`)
            .then(response => {
                const currentData = response.data                
                dispatch(fetchCurrentDataSuccess(currentData));
                const { lat, lon } = currentData.coord                
                dispatch(fetchDailyDataRequest())
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=17e57c3ab6fdc68fb851ae80c2f9c4b6`)
                    .then(response => {
                        const dailyData = response.data.daily
                        dispatch(fetchDailyDataSuccess(dailyData))
                    })
                    .catch(error => {
                        const errorMessage = error.message
                        dispatch(fetchCurrentDataFailure(errorMessage))
                    })            
            })
            .catch(error => {
                const errorMessage = error.message
                alert('No results found')
                dispatch(fetchCurrentDataFailure(errorMessage))
            })
    }
}