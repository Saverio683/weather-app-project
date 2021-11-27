import React from "react";
import { connect } from "react-redux";

import DailyData from '../../components/daily-data/daily-data.component';

import getDate from './get-date.function';

import { DailyForecastContainer, DailyDataContainer, Description } from './daily-forecast.styles';


const DailyForecast = ({ dailyData }) => (
    <DailyForecastContainer>
        <Description>Daily forecast</Description>
        <DailyDataContainer>
            { //dailyData is an array of 8 objects containing the today forecast + forecasts for the next 7 days
                dailyData.slice(1).map((singleDay, i) => /*I used the slice method because the first object of the array contains today's 
                forecast, which is not needed in this component*/
                    <DailyData 
                        date={getDate(i)}
                        iconId={singleDay.weather[0].icon}
                        temperature={singleDay.temp.day}
                        key={i}
                    />
                )
            }      
        </DailyDataContainer>
    </DailyForecastContainer>
);

const mapStateToProps = state => ({
 dailyData: state.data.dailyData
}); 

export default connect(mapStateToProps)(DailyForecast);