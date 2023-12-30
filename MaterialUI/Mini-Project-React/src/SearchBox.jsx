import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import "./SearchBox.css";
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}){
    
    let [city ,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1031e82180981b48e6b9fba105594774"

    let getWeatherInfo = async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        // console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
    }

    
    let handelChange=(event)=>{
        setCity(event.target.value);
    }
    let handelSubmit= async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
        
    }

    return (
        <div className='searchBox'>
        <h3>Search for the Weather</h3>
        <form action="" onSubmit={handelSubmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined" 
            size='small'
             required 
             value={city}
             onChange={handelChange} />
            <br /><br />
            <Button variant="contained" 
            type='submit' >
                Search</Button>
            {error &&<p style={{color:"red"}}>No Such Place Exists</p>}
        </form>
        </div>
    )
}