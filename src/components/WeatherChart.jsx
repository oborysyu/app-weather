import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./WeatherChart.css";

function WeatherChart(props) {
  return (
    <div className="weather-chart">
      Графік зміни температури і вологості
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" name="Температура" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" name="Вологість" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeatherChart;
