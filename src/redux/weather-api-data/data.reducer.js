import { 
    FETCH_CURRENT_DATA_REQUEST,
    FETCH_CURRENT_DATA_SUCCESS,
    FETCH_CURRENT_DATA_FAILURE,
    FETCH_DAILY_DATA_REQUEST,
    FETCH_DAILY_DATA_SUCCESS,
    FETCH_DAILY_DATA_FAILURE
} from './data.types';

const INITIAL_STATE = {
    currentData: null,
    dailyData: null,
    loading: false,
    error: null
}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_CURRENT_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CURRENT_DATA_SUCCESS:
            return {
                ...state,
                currentData: action.payload,
            }
        case FETCH_CURRENT_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_DAILY_DATA_REQUEST:
            return state
        case FETCH_DAILY_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                dailyData: action.payload
            }
        case FETCH_DAILY_DATA_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }            
        default:
            return state;
    }
}

export default dataReducer;