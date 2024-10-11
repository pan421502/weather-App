import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.84,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo = (newinfo) => {
       setWeatherInfo(newinfo);
    }
  return (
    <div style={{ textAlign:"center"}}>
      <h2 style={{marginBottom:"25px"}}>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
