import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppContainer, RedirectComponent } from './app.styles';

import SearchField from '../components/search-field/search-field.component';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

const PageNotFound = lazy(() => import('../pages/page-not-found/page-not-found.component'));
const MainPage = lazy(() => import('../pages/main-page/main-page.component'));
const CurrentForecast = lazy(() => import('../components/current-forecast/current-forecast.component'));

const App = () => ( 
  <AppContainer>
    <RedirectComponent to='/'>GO TO HOME PAGE</RedirectComponent>
    <SearchField />
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>        
            <Route exact path='/' element={<MainPage />} />
            <Route exact path='/details/:detailsID' element={<CurrentForecast isMainPage={false} />} />
            <Route exact path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </AppContainer>
);

export default App;