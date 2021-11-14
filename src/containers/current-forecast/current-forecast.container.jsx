import React from "react";
import { connect } from "react-redux";

import OverallData from '../../components/overall-data/overall-data.component';
import Details from '../../components/details/details.component';

import calculateTime from "./calculate-time.function";

import { CurrentDataContainer, CurrentTime, LocationContainer, DataContainer } from './current-forecast.styles';

import { 
    selectCityName,
    selectClouds,
    selectCountryName,
    selectTime,
    selectWindSpeed,
    selectMainData,
    selectWeatherData
} from '../../redux/weather-api-data/current-data.selectors';

const CurrentForecast = ({ name, country, time, weatherData, mainData, windSpeed, clouds }) => {
    const { description, icon } = weatherData;
    const { temp, temp_min, temp_max, humidity, pressure } = mainData;
    return (
        <CurrentDataContainer>
            <LocationContainer>
                    {name}, {country}
            </LocationContainer>
            <CurrentTime>
                At {calculateTime(time)}
            </CurrentTime>
            <DataContainer>
                <OverallData 
                    temperature={temp}
                    description={description} 
                    iconId={icon}
                />
                <Details 
                    tempMin={temp_min}
                    tempMax={temp_max}
                    humidity={humidity}
                    pressure={pressure}
                    windSpeed={windSpeed}
                    clouds={clouds}
                />
            </DataContainer>
        </CurrentDataContainer>
    )
}

const mapStateToProps = state => ({ 
    name: selectCityName(state),
    country: selectCountryName(state),
    time: selectTime(state),
    mainData: selectMainData(state),
    weatherData: selectWeatherData(state),
    windSpeed: selectWindSpeed(state),
    clouds: selectClouds(state)
})


export default connect(mapStateToProps)(CurrentForecast);