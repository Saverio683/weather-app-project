import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import calculateTime from "./calculate-time.function";
import getDate from "../daily-forecast/get-date.function";

import OverallData from '../../components/overall-data/overall-data.component';
import Details from '../../components/details/details.component';

import { CurrentDataContainer, CurrentTime, LocationContainer, DataContainer } from './current-forecast.styles';

const CurrentForecast = ({ isMainPage }) => {
    const { detailsID } = useParams();

    const dailyData = useSelector(state => state.data.dailyData[detailsID]);
    const currentData = useSelector(state => state.data.currentData);
    
    const { name } = currentData;
    const country = useSelector(state => state.data.currentData.sys.country);    

    let time, temp, desc, iconId, tempMin, tempMax, humidity, pressure, windSpeed, clouds;

    if(isMainPage) {
        time = calculateTime(currentData.dt);
        temp = currentData.main.temp;
        desc = currentData.weather[0].description;
        iconId = currentData.weather[0].icon;
        tempMin = currentData.main.temp_min;
        tempMax = currentData.main.temp_max;
        humidity = currentData.main.humidity;
        pressure = currentData.main.pressure;
        windSpeed = currentData.wind.speed;
        clouds = currentData.clouds.all;
    } else {        
        time = getDate(detailsID-1);
        temp = dailyData.temp.day;
        desc = dailyData.weather[0].description;
        iconId = dailyData.weather[0].icon;
        tempMin = dailyData.temp.min;
        tempMax = dailyData.temp.max;
        humidity = dailyData.humidity;
        pressure = dailyData.pressure;
        windSpeed = dailyData.wind_speed;
        clouds = dailyData.clouds;        
    }

    return (
        <CurrentDataContainer>
            <LocationContainer>
                    {name}, {country}
            </LocationContainer>
            
            {
                isMainPage ? 
                    <CurrentTime>At {time}</CurrentTime>
                :
                    <CurrentTime className='details-page'>Forecast for {time}</CurrentTime>
            }                
            
            <DataContainer>
                <OverallData 
                    temperature={temp}
                    description={desc} 
                    iconId={iconId}
                />
                <Details 
                    tempMin={tempMin}
                    tempMax={tempMax}
                    humidity={humidity}
                    pressure={pressure}
                    windSpeed={windSpeed}
                    clouds={clouds}
                />
            </DataContainer>
        </CurrentDataContainer>
    )
}

export default CurrentForecast;