import { useState } from "react";
import "./SearchCityInput.css";

export function SearchCityInput({ addCity, getWeather }) {
  const [enteredCityName, setEnteredCityName] = useState("");

  function handleClick() {
    if (enteredCityName.trim() !== "") {
      addCity(enteredCityName);
      setEnteredCityName("");
      getWeather(enteredCityName);
    }
  }

  return (
    <div className="addCity">
      Назва міста
      <input
        type="text"
        placeholder="Введіть місто..."
        onChange={(e) => setEnteredCityName(e.target.value)}
        value={enteredCityName}
      ></input>
      <button onClick={handleClick}>Шукати</button>
    </div>
  );
}
