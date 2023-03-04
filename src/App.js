import './App.css';
import {AiOutlineMenu} from 'react-icons/ai';
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
    <div className="w-screen h-screen bg-green-500 p-5">
      <div className='p-2 flex justify-end'><AiOutlineMenu className='text-2xl'/></div>
      <input 
      type='text' 
      placeholder='Enter Your Location....' 
      className='p-2 m-10 border-none rounded-lg'
      value={city}
      onChange={e=>setCity(e.target.value)}
      onKeyDownCapture={getWeather}
      />
      { typeof weatherData.main == 'undefined'?<div>Welcome to My Weather app</div>
      :(<div className='flex justify-center'>
      <div className='text-white'>
        <div className=''>icons for sum</div>
        <p style={{textTransform:'uppercase'}} className='pt-2 text-sm'>{weatherData.weather.description}</p>
        <div className='pt-10'>
          <p className='text-slate-300'>Indonisa</p>
          <h1 className='font-bold text-2xl' style={{textTransform:'uppercase'}}>{weatherData.name}</h1>
          <p className='font-sans pt-2'>Saturday, 06:47pm</p>
          <p className='font-thin'>22 Feb 2016</p>
        </div>
      </div>
      <h1 className='text-6xl text-white flex items-center'>{weatherData.main.temp} <span>&#176;</span>C</h1>
    </div>)
      }
    </div>
  );
}

export default App;
