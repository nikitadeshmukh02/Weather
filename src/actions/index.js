import axios from 'axios'
const API_KEY='7e74a088489e368becbe141b35ae5f30'
const URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER'
export function fetchWeather(city)
{
  const url=`${URL}&q=${city},us`;
  const request=axios.get(url);
  return{
    type:FETCH_WEATHER,
    payload:request
  }
}