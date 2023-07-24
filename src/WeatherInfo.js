import React from 'react';
import {Box, Typography} from '@mui/material';

const WeatherInfo = ({weather}) => {
    return (
    <Box>
      <br></br>
      <Typography style={{ fontWeight: "bold" }}>Location Name: {weather.location}  </Typography>
      <Typography style={{ fontWeight: "bold" }}>Temperature: {Math.round(weather.temp)}°F</Typography>
      <Typography style={{ fontWeight: "bold" }}>Feels Like: {Math.round(weather.feelsLike)}°F</Typography>
      <Typography style={{ fontWeight: "bold" }}>Minimum Temperature: {Math.round(weather.minTemp)}°F</Typography>
      <Typography style={{ fontWeight: "bold" }}>Maximum Temperature: {Math.round(weather.maxTemp)}°F</Typography>
    </Box>
    );
}

export default WeatherInfo;