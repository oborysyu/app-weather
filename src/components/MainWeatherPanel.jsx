import "./MainWeatherPanel.css";

function MainWeatherPanel(props) {
  return (
    <div className="weather-panel">
      <div className="weather-icon">
        <img
          src={
            props.current?.icon
              ? `../assets/${props.current.icon}.svg`
              : "../assets/01d.svg"
          }
        />
      </div>
      <div className="weather-data">
        Поточна погода в м.{props.city}
        <br />
        Температура: {props.current?.temperature} С°
        <br />
        Вологість: {props.current?.humidity} %<br />
        Швидкість вітру: {props.current?.wind} м/сек
      </div>
    </div>
  );
}

export default MainWeatherPanel;
