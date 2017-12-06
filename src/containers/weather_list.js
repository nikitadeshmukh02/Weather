import React,{Component} from 'react'
import { connect} from 'react-redux'
import mapDispatchToProps from 'redux'
import {Sparklines,SparklinesLine}  from 'react-sparklines'
export  class WeatherList extends Component{

  renderWeather(cityData)
  {
    const temps=cityData.list.map(weather=>weather.main.temp)
    console.log(temps)
      return(
        <tr className='rows'  key={cityData.city.name}>
        <td className='cols-3'>
        {cityData.city.name}

        </td>
        <td className='cols-3'>
       <Sparklines height={120} width={180} data={temps}>
<SparklinesLine color="blue"/>
       </Sparklines>


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
