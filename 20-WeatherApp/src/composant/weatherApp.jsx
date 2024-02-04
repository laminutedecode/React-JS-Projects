
import {useState, useEffect} from 'react'
import WeatherForm from './weatherForm'
import WeatherInfos from './weartherInfos'
import Loader from './loader'

const WEATHERAPI_KEY="api"
const WEATHERAPI_URL="http://api.weatherapi.com/v1/current.json?aqi?=no"

export default function WeatherApp(){

const [weather, setWeather] = useState(null);

useEffect(()=> {
  loadInfo();
}, []);

useEffect(()=> {
  document.title = `Météo | ${weather?.location.name ?? ''}`
}, [weather])


async function loadInfo(city='london'){
  try {
    const request = await fetch(`${WEATHERAPI_URL}&Key=${WEATHERAPI_KEY}&q=${city}`);

    const json = await request.json();


    setTimeout(()=> {
      setWeather(json);

    }, 2000);

    console.log(json);
  }catch(error){
    console.error('Erreur lors de la requête API :', error);
  }
}

function handleChange(city){
  setWeather(null);
  loadInfo(city);
}

  return (
    <div className="container">
      <WeatherForm onChangeCity={handleChange}/>
      {weather ? <WeatherInfos weather={weather} /> : <Loader />}
    </div>
  )
}