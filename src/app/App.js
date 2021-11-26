import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import './App.scss';

import SearchField from '../components/search-field/search-field.component';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

const CurrentForecast = lazy(() => import('../containers/current-forecast/current-forecast.container'));
const DailyForecast = lazy(() => import('../containers/daily-forecast/daily-forecast.container'));
const LoadingSpinner = lazy (() => import('../components/loading-spinner/loading-spinner.component'));

const App = () => {
  const isLoading = useSelector( state => state.data.loading);
  const data = useSelector( state => state.data.dailyData); 
  //if there will be the data of the daily forecast, surely there will also be those of the current
  
  return ( 
    <div className='app'>
      <h4 className='title'>WEATHER APP</h4>
      <SearchField />
      <ErrorBoundary>
        <Suspense fallback={null}>
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
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App;