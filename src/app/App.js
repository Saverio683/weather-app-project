import React from 'react';
import { useSelector } from 'react-redux';

import './App.scss';

import SearchField from '../components/search-field/search-field.component';
import CurrentForecast from '../containers/current-forecast/current-forecast.container';
import DailyForecast from '../containers/daily-forecast/daily-forecast.container';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

const App = () => {
  const isLoading = useSelector( state => state.data.loading);
  const data = useSelector( state => state.data.dailyData); 
  //if there will be the data of the daily forecast, surely there will also be those of the current
  
  return ( 
    <div className='app'>
      <h4 className='title'>WEATHER APP</h4>
      <SearchField />
      {
        isLoading ?
          <LoadingSpinner />
        :        
        data ? //if the request to the API was successful, then there will be data for the components that need them
          [
            <CurrentForecast key='current-forecast-component' />,
            <DailyForecast key='daily-forecast-component' />
          ]
        :  
          <span className='search-something'>Please search something</span> 
      }
    </div>
  )
}

export default App;