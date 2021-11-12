import React from "react";
import { connect } from "react-redux";

import DailyData from "../../components/daily-data/daily-data.component";

import getDate from './get-date.function';

import { DailyForecastContainer, DailyDataContainer, Description } from './daily-forecast.styles';

const DailyForecast = ({ dailyData }) => (
    <DailyForecastContainer>
        <Description>Daily forecast</Description>
        <DailyDataContainer>
            {
                dailyData.map((x, i) => 
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
);

const mapStateToProps = state => ({
 dailyData: state.data.dailyData
}) 

export default connect(mapStateToProps)(DailyForecast);