import React from "react";
import { connect } from "react-redux";

import OverallData from '../../components/overall-data/overall-data.component';
import Details from '../../components/details/details.component';

import calculateTime from "./calculate-time.function";

import { CurrentDataContainer, CurrentTime, LocationContainer, DataContainer } from './current-forecast.styles';

const CurrentForecast = ({ currentData }) => (
    <CurrentDataContainer>
        <LocationContainer>
            <span style={{'marginRight': '1vw'}}>
                {currentData.name},
            </span>
            <span>
                {currentData.sys.country}
            </span>
        </LocationContainer>
        <CurrentTime>
            At {calculateTime(currentData.dt)}
        </CurrentTime>
        <DataContainer>
            <OverallData 
                temperature={currentData.main.temp}
                description={currentData.weather[0].description} 
                iconId={currentData.weather[0].icon}
            />
            <Details 
                tempMin={currentData.main.temp_min}
                tempMax={currentData.main.temp_max}
                humidity={currentData.main.humidity}
                pressure={currentData.main.pressure}
                windSpeed={currentData.wind.speed}
                clouds={currentData.clouds.all}
            />
        </DataContainer>
    </CurrentDataContainer>
);

const mapStateToProps = state => ({ 
    currentData: state.data.currentData
})


export default connect(mapStateToProps)(CurrentForecast);