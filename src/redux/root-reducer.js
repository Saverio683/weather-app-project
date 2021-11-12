import { combineReducers } from 'redux';

import dataReducer from './weather-api-data/data.reducer';

export default combineReducers({
    data: dataReducer
});