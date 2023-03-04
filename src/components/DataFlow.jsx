import React from 'react'
import { useState } from 'react';

function DataFlow() {
    const api_key = "f5e9325c85f4be8e98a169104466a3d7";
    const [weatherData, setWeatherData]= useState([{}]);
    const [city, setCity] = useState("");
  
    const getWeather = (e)=>{
      if(e.key === 'Enter'){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
        .then(
          response => response.json()
        )
        .then(data =>{
          setWeatherData(data);
          console.log(data);
        })
      }
    }
  return (
    <div>
    <input 
      type='text' 
      placeholder='Enter Location...'
      value={city}
      onChange={e=> setCity(e.target.value)}
      onKeyDownCapture={getWeather}/>
      {
        typeof weatherData.main === 'undefined'?
        (<div><p>Welcome to weather app</p></div>)
        :(<div>
          <h1>{weatherData.name}</h1>
          <p>{weatherData.main.temp} degree celius</p>
          <p>{weatherData.weather.main}</p>
        </div>)
      }
    </div>
  )
}

export default DataFlow


// {
//   "coord": {
//       "lon": 96.1561,
//       "lat": 16.8053
//   },
//   "weather": [
//       {
//           "id": 800,
//           "main": "Clear",
//           "description": "clear sky",
//           "icon": "01d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 299.13,
//       "feels_like": 299.13,
//       "temp_min": 299.13,
//       "temp_max": 299.13,
//       "pressure": 1018,
//       "humidity": 83
//   },
//   "visibility": 6000,
//   "wind": {
//       "speed": 2.06,
//       "deg": 30
//   },
//   "clouds": {
//       "all": 0
//   },
//   "dt": 1677898173,
//   "sys": {
//       "type": 1,
//       "id": 9322,
//       "country": "MM",
//       "sunrise": 1677887520,
//       "sunset": 1677930169
//   },
//   "timezone": 23400,
//   "id": 1298824,
//   "name": "Yangon",
//   "cod": 200
// }
