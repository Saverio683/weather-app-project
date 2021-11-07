import React from "react";

import { DailyForecastContainer, DailyDataContainer, Description } from './daily-forecast.styles';

import DailyData from "../../components/daily-data/daily-data.component";

import getDate from './get-date.function';

const DailyForecast = ({ data }) => (
    <DailyForecastContainer>
        <Description>Daily forecast</Description>
        <DailyDataContainer>
            {
                data.map((x, i) => 
                    <DailyData 
                        date={getDate(i)}
                        iconId={x.weather[0].icon}
                        temperature={x.temp.day}
                        key={i}
                    />
                )
            }      
        </DailyDataContainer>
    </DailyForecastContainer>
)

export default DailyForecast;