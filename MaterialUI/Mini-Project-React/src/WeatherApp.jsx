import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import {useState} from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"",
        feelsLike:"",
        temp:"",
        tempMin:"",
        tempMax:"",
        humidity:"",
        weather:"",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}