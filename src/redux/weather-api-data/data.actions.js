import axios from 'axios';

import { 
    FETCH_CURRENT_DATA_REQUEST,
    FETCH_CURRENT_DATA_SUCCESS,
    FETCH_CURRENT_DATA_FAILURE,
    FETCH_DAILY_DATA_REQUEST,
    FETCH_DAILY_DATA_SUCCESS,
    FETCH_DAILY_DATA_FAILURE
 } from './data.types';

const { REACT_APP_API_KEY } = process.env; //instead of this insert here your API key  

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

/*to make the request for the daily forecast you need the geographic coordinates of the city, 
located in the answer of the call for the current forecast*/

export const fetchData = (cityField, countryField) => {
    return (dispatch) => {
        dispatch(fetchCurrentDataRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityField},${countryField}&units=metric&appid=${REACT_APP_API_KEY}`)
            .then(response => {
                const currentData = response.data                
                dispatch(fetchCurrentDataSuccess(currentData));
                const { lat, lon } = currentData.coord                
                dispatch(fetchDailyDataRequest())/*if the above request has been successful, there will be the coordinates and therefore now you can proceed with the second request*/
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${REACT_APP_API_KEY}`)
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