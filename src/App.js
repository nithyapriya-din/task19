
import './App.css';
import Search from "./component/search/search";
import CurrentWeather from "./component/current-weather/current-weather";
import Forecast from "./component/forecast/forecast"
import { cur_weather_api, cur_weather_api_key } from "./Api";
import { useState } from 'react';

function App() {

  const [current_weather, setcurrent_weather] = useState(null);
  const [current_forecast, setcurrent_forecast] = useState(null);

  const onhandlechange = (searchdata) => {
    const [lat, lon] = searchdata.value.split(" ");

    const currentWeather_fetch = fetch(`${cur_weather_api}/weather?lat=${lat}&lon=${lon}&appid=${cur_weather_api_key}&units=metric`);
    const weatherForecast_fetch = fetch(`${cur_weather_api}/forecast?lat=${lat}&lon=${lon}&appid=${cur_weather_api_key}&units=metri`);

    Promise.all([currentWeather_fetch, weatherForecast_fetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrent_weather({ city: searchdata.lable, ...weatherResponse });
        setcurrent_forecast({ city: searchdata.lable, ...forecastResponse });

      })
      .catch((err) => console.error(err));
  }
  console.log(current_weather);
  console.log(current_forecast);

  return (
    <div className="container">
      <h1 >Weather Prediction</h1>
      <Search onsearchdata={onhandlechange} />
      {current_weather && <CurrentWeather data={current_weather}/>}
      {current_forecast && <Forecast data={current_forecast} />}
    </div>
  );
}

export default App;
