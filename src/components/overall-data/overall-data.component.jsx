import React from "react";

import { OverallDataContainer, Image, Wrapper, Temperature, Description } from './overall-data.styles.jsx';

import getWeatherIcon from "../../icons/get-weather-ico.function";

const OverallData = ({ temperature, description, iconId }) => (
    <OverallDataContainer>
        <Image src={getWeatherIcon(iconId)} alt='forecast-ico' />
        <Wrapper>
            <Temperature>
                {Math.trunc(temperature)}°
            </Temperature>
            <Description>
                {description}
            </Description>
        </Wrapper>    
    </OverallDataContainer>
);
export default OverallData;