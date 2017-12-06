import { combineReducers } from 'redux';
import WeatherReducer from './weather-reducer'
const RootReducer = combineReducers({//Wiring reducer to the function
WeatherReducer
});

export default RootReducer;
