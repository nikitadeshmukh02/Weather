import { combineReducers } from 'redux';
import WeatherReducer  from './weather_reducer'
const RootReducer = combineReducers({//Wiring reducer to the function
 weather :WeatherReducer
});

export default RootReducer;
