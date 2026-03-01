function WeatherResults({ data }) {
  return (
    <div className="bg-orange-300 w-80 p-6 rounded-md shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />

      <p className="text-4xl font-bold mt-2">
        {Math.round(data.temperature)}°
      </p>

      <p className="mt-2 capitalize">
        Condition: {data.condition}
      </p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind: {data.wind} m/s</p>
    </div>
  );
}

export default WeatherResults;