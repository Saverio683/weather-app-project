import React, { useState } from 'react';

import './App.scss';

import SearchField from '../components/search-field/search-field.component';
import CurrentForecast from '../containers/current-forecast/current-forecast.component';
import DailyForecast from '../containers/daily-forecast/daily-forecast.component';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

const API_KEY = '17e57c3ab6fdc68fb851ae80c2f9c4b6'; 

const App = () => {

  const [firstLoading, isFirstLoading] = useState(true);
  const [searchField, setSearchField] = useState('');
  const [countryField, setCountryField] = useState('');  
  const [currentData, setCurrentData] = useState(null); //I use 2 hooks for storing data from the current weather api and from the one call api
  const [oneCallData, setOneCallData] = useState(null);   

  const onFormSubmit = (e) => {
    e.preventDefault()
    searchField.length < 1 ? alert('Please insert a city') : (
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchField},${countryField}&units=metric&appid=${API_KEY}`)
        .then(resp => resp.json())
        .then(dataRecived => {
          if(Object.keys(dataRecived).length > 2) { //this if is to check if there are cities with the entered name, if no results are found the API will respond with a 2 element object 
            setCurrentData(dataRecived);  
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${dataRecived.coord.lat}&lon=${dataRecived.coord.lon}&units=metric&exclude=current,minutely,alerts&appid=${API_KEY}`)
              .then(resp => resp.json())
              .then(dataRecived => setOneCallData(dataRecived));
              isFirstLoading(false);
          } else {
            alert('No results found')
          }   
        })
      );
  }
  const onCityChange = e => {
    setSearchField(e.target.value);
  } 

  const onCountryChange = (e) => {
    setCountryField(e.target.value);
    console.log(currentData)
  } 

  return ( 
      <div className='app'>
      <h4 className='title'>WEATHER APP</h4>
      <SearchField 
        formSubmit={onFormSubmit}
        cityChange={onCityChange}
        countryChange={onCountryChange}
      />
      {
        firstLoading ?
          <span className='search-something'>Please search something</span>
        : 
        (currentData && oneCallData) ?
          <React.Fragment>
            <CurrentForecast 
              currentData={currentData}
            />
            <DailyForecast 
              data={oneCallData.daily}
            />
          </React.Fragment>
        :
          <LoadingSpinner />
      }
      </div>
    );
}

export default App;