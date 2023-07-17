import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

function App() {
  
  const [weather, setWeather] = useState(''); //initializes empty string, stores data from API
  const [city, setCity] = useState(''); //initializes empty string, stores name of city entered 

  const callAPI = async (e) => {    
    e.preventDefault()
    const loc = e.target.elements.loc.value //gets the input field 
    const req = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=fd4c6bb8a4f6d687a1aa7b5cc01f02a8&units=imperial`); //sends get request 
    const res = await req;  //waits for response and then stores in res variable
   
    setWeather({ //stores retrieved weather data 
      location: res.data.name, 
      temp: res.data.main.temp, 
      feelsLike: res.data.main.feels_like, 
      minTemp: res.data.main.temp_min, 
      maxTemp: res.data.main.temp_max
    })
    setCity(res.data.name) 
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Container>
          <h1>Weather App</h1>
          <form onSubmit={callAPI} className='form'>
            <TextField label="Enter City Name" name='loc' ></TextField>  
            <Button type='submit' className='button' style={{paddingTop:"15px",paddingBottom:"15px", marginLeft: "15px"}} variant="contained">Get Weather</Button>
          </form>
          <Box>
            <br></br>
            <Typography style={{fontWeight:"bold"}}>Location Name: {weather.location}  </Typography>
            <Typography style={{fontWeight:"bold"}}>Temperature: {Math.round(weather.temp)}°F</Typography>
            <Typography style={{fontWeight:"bold"}}>Feels Like: {Math.round(weather.feelsLike)}°F</Typography>
            <Typography style={{fontWeight:"bold"}}>Minimum Temperature: {Math.round(weather.minTemp)}°F</Typography>
            <Typography style={{fontWeight:"bold"}}>Maximum Temperature: {Math.round(weather.maxTemp)}°F</Typography>
          </Box>
        </Container>
      </header>
    </div>
  );
}

export default App;