import { WiDaySunny } from "react-icons/wi";

function WeatherResults({ data }) {
  return (
    <div className="bg-orange-300 w-80 p-6 rounded-md shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>

      <WiDaySunny className="text-white text-6xl mx-auto" />

      <p className="text-4xl font-bold mt-2">
        {data.temperature}°
      </p>

      <p className="mt-2">Condition: {data.condition}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind: {data.wind} km/h</p>
    </div>
  );
}

export default WeatherResults;