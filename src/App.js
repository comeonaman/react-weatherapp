import React, {useState} from 'react';
import axios from 'axios';
import {Container} from '@mui/material';
import {ThermostatOutlined} from '@mui/icons-material';
import './App.css';
import Weather from './Weather';
import WeatherInfo from './WeatherInfo';

function App() {

  const [weather, setWeather] = useState({
    location: '',
    temp: 0,
    feelsLike: 0,
    minTemp: 0,
    maxTemp: 0,
  });
  
  const [city, setCity] = useState('');

  const callAPI = async (loc) => {
    const req = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=fd4c6bb8a4f6d687a1aa7b5cc01f02a8&units=imperial`);
    const res = await req;
    
    setWeather({
      location: res.data.name || '',
      temp: res.data.main.temp || 0,
      feelsLike: res.data.main.feels_like || 0,
      minTemp: res.data.main.temp_min || 0,
      maxTemp: res.data.main.temp_max || 0,
    });
    setCity(res.data.name);
  }

  return (
      <div className='weather-card'>
        <header className='App-header'>
          <Container>
            <h1>Weather App <ThermostatOutlined sx={{fontSize: 36, color: '#fff'}} /></h1>
            <Weather onSubmit={callAPI} />
            <WeatherInfo weather={weather} />
          </Container>
        </header>
      </div>
  );
}

export default App;