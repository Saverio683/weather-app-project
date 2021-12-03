import React from "react";

import { DailyDataContainer, DateContainer, ImageContainer, TemperatureContainer } from './daily-data.styles';

import getWeatherIcon from "../../icons/get-weather-ico.function";

const DailyData = ({ date, iconId, temperature, func }, key) => (
    <DailyDataContainer key={key} onClick={func}>
        <DateContainer>
            {date}
        </DateContainer>
        <ImageContainer src={getWeatherIcon(iconId)} alt='weather-ico' />
        <TemperatureContainer>
            {Math.trunc(temperature)}°C
        </TemperatureContainer>
    </DailyDataContainer> 
);

export default DailyData;