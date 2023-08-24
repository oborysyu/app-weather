import { useState } from "react";
import "./App.css";
import { SearchCityInput } from "./components/SearchCityInput";
import MainWeatherPanel from "./components/MainWeatherPanel";
import { API_KEY, API_URL } from "./config/api";
import WeatherChart from "./components/WeatherChart";

function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [daysForecast, setDaysForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // tries to make an API call with the given city name and triggers state update
  let makeApiCall = async (city) => {
    setCurrentWeather({});
    setIsLoading(true);
    const api_data = await fetch(
      API_URL + `?q=${city}&units=metric&APPID=${API_KEY}`
    ).then((resp) => resp.json());
    setIsLoading(false);
    if (api_data.cod === "200") {
      setIsError(null);
      updateData(api_data);
    } else {
      setIsError(api_data.message);
    }
  };

  // method to update weather data
  let updateData = (data) => {
    const days = [];
    for (let i = 0; i < data.list.length; i++) {
      days.push({
        name: data.list[i].dt_txt,
        temperature: data.list[i].main.temp,
        humidity: data.list[i].main.humidity,
        amt: data.list[i].main.temp,
      });
    }
    setCurrentWeather({
      humidity: data.list[0].main.humidity,
      temperature: data.list[0].main.temp,
      wind: data.list[0].wind.speed,
      icon: data.list[0].weather[0].icon,
    });
    setDaysForecast(days);
  };

  return (
    <>
      <SearchCityInput addCity={setCity} getWeather={makeApiCall} />
      {isLoading ? (
        <p>Завантаження...</p>
      ) : isError ? (
        <p>Сталася помилка - {isError}</p>
      ) : (
        Object.keys(currentWeather).length > 0 && (
        <>
          <MainWeatherPanel city={city} current={currentWeather} />
          <WeatherChart data={daysForecast} />
        </>)
        
      )}
    </>
  );
}

export default App;
