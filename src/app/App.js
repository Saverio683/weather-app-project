import React from 'react';
import { connect } from 'react-redux';

import './App.scss';

import SearchField from '../components/search-field/search-field.component';
import CurrentForecast from '../containers/current-forecast/current-forecast.container';
import DailyForecast from '../containers/daily-forecast/daily-forecast.container';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

console.log(process.env)

const App = ({ loading, currentData, dailyData }) => ( 
  <div className='app'>
    <h4 className='title'>WEATHER APP</h4>
    <SearchField />
    {
      loading ?
        <LoadingSpinner />
      :        
      currentData && dailyData ?
        [
          <CurrentForecast key='current-forecast-component' />,
          <DailyForecast key='daily-forecast-component' />
        ]
      :  
        <span className='search-something'>Please search something</span> 
    }
  </div>
);

const mapStateToProps = state => ({ 
  loading: state.data.loading,
  currentData: state.data.currentData,
  dailyData: state.data.dailyData
})

export default connect(mapStateToProps)(App);