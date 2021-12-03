import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { SearchSomething } from './main-page.styles';

const CurrentForecast = lazy(() => import('../../components/current-forecast/current-forecast.component'));
const DailyForecast = lazy(() => import('../../components/daily-forecast/daily-forecast.component'));
const LoadingSpinner = lazy (() => import('../../components/loading-spinner/loading-spinner.component'));

const MainPage = () => {
    const isLoading = useSelector(state => state.data.loading);
    const dailyData = useSelector(state => state.data.dailyData);

    return (
        <Suspense fallback={null}>
        {
            isLoading ?
                <LoadingSpinner />
            :        
            dailyData ? //if the request to the API was successful, then there will be data for the components that need them
                [
                    <CurrentForecast key='current-forecast-component' 
                        isMainPage={true}
                    />,
                    <DailyForecast key='daily-forecast-component' />
                ]            
            :  
                <SearchSomething>Please search something</SearchSomething> 
        }
        </Suspense>
    );
}

export default MainPage;