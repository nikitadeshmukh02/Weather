import React,{Component} from 'react'
import { connect} from 'react-redux'
import mapDispatchToProps from 'redux'
import Chart from '../components/chart'
export  class WeatherList extends Component{

  renderWeather(cityData)
  {
    const temps=cityData.list.map(weather=>weather.main.temp)
    const humidity=cityData.list.map(weather=>weather.main.humidity)
    const pressure=cityData.list.map(weather=>weather.main.pressure)


    console.log(temps)
      return(
        <tr className='rows'  key={cityData.city.name}>
        <td className='cols-3'>
        {cityData.city.name}
        </td>
        <td className='cols-3'>
<Chart data={temps} color="blue"/>
        </td>

        <td className='cols-3'>
<Chart data={pressure} color="pink"/>
        </td>
        <td className='cols-3'>
<Chart data={humidity} color="orange"/>
        </td>
        </tr>
      )
  }
  render()
  {
    return(
      <table className='table'>
      <thead>
      <tr className='rows'>
      <th  className='cols-3'>City</th>
      <th className='cols-3'>Tempreture</th>
      <th className='cols-3'>Pressure</th>
      <th className='cols-3'>Humidity</th>
      </tr>
      </thead>
      <tbody className='rows'>
     {this.props.wt.map(this.renderWeather)}
      </tbody>
      </table>
    )
  }
}

function mapStateToProps(state)
{
return{wt:state.weather};
}
export default connect(mapStateToProps)(WeatherList)
