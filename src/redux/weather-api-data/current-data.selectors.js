import { createSelector } from 'reselect';


const selectCurrentData = state => state.data.currentData;

export const selectWeatherData = createSelector(
    [selectCurrentData],
    (currentData) => currentData.weather[0]
);

export const selectMainData = createSelector(
    [selectCurrentData],
    (currentData) => currentData.main
);

export const selectCityName = createSelector(
    [selectCurrentData],
    (currentData) => currentData.name
);

export const selectCountryName = createSelector(
    [selectCurrentData],
    (currentData) => currentData.sys.country
);

export const selectTime = createSelector(
    [selectCurrentData],
    (currentData) => currentData.dt    
);

export const selectWindSpeed = createSelector(
    [selectCurrentData],
    (currentData) => currentData.wind.speed
);

export const selectClouds = createSelector(
    [selectCurrentData],
    (currentData) => currentData.clouds.all
);