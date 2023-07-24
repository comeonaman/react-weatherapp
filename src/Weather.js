import React from 'react';
import { TextField, Button } from '@mui/material';

const Weather = ({onSubmit}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const loc = e.target.elements.loc.value;
        onSubmit(loc);
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <TextField className='textField' label="Enter City Name" name='loc'></TextField>
            <Button  type='submit' className='button' style={{ paddingTop: "15px", paddingBottom: "15px", marginLeft: "15px" }} variant="contained">Get Weather</Button>
        </form>
    );
}

export default Weather;