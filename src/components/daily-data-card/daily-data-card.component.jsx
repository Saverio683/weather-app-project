import React from "react";

import { DailyDataContainer, DateContainer, ImageContainer, TemperatureContainer } from './daily-data.styles';

import getWeatherIcon from "../../icons/get-weather-ico.function";

const DailyDataCard = ({ date, iconId, temperature, onClickFunction }, key) => (
    <DailyDataContainer key={key} onClick={onClickFunction}>
        <DateContainer>
            {date}
        </DateContainer>
        <ImageContainer src={getWeatherIcon(iconId)} alt='weather-ico' />
        <TemperatureContainer>
            {Math.trunc(temperature)}°C
        </TemperatureContainer>
    </DailyDataContainer> 
);

export default DailyDataCard;