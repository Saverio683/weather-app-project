import React from "react";

import { CurrentDataContainer, CurrentTime, LocationContainer, DataContainer } from './current-forecast.styles';

import OverallData from '../../components/overall-data/overall-data.component';
import Details from '../../components/details/details.component';

import calculateTime from "./calculate-time.function";

const CurrentForecast = (currentData) => {
    const data = currentData.currentData;
    return(
    <CurrentDataContainer>
        <LocationContainer>
            <span style={{'marginRight': '1vw'}}>{data.name},</span>
            <span>{data.sys.country}</span>
        </LocationContainer>
        <CurrentTime>At {calculateTime(data.dt)}</CurrentTime>
        <DataContainer>
            <OverallData 
                temperature={data.main.temp}
                description={data.weather[0].description} 
                iconId={data.weather[0].icon}
            />
            <Details 
                tempMin={data.main.temp_min}
                tempMax={data.main.temp_max}
                humidity={data.main.humidity}
                pressure={data.main.pressure}
                windSpeed={data.wind.speed}
                clouds={data.clouds.all}
            />
        </DataContainer>
    </CurrentDataContainer>
)};

export default CurrentForecast;