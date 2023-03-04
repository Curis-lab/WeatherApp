import './App.css';
import { useState } from 'react';


function App() {
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
    //get base on your current location and show five city near your's
    <div className="App">
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
          <p>{weatherData.name}</p>
          <p>{weatherData.main.temp} degree celius</p>
        </div>)
      }
    </div>
  );
}

export default App;
