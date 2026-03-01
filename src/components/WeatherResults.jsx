function WeatherResults({ data }) {
  return (
    <div className="mt-8 bg-white/20 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">
        {data.name}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />

      <p className="text-5xl font-bold mt-2">
        {Math.round(data.temperature)}°
      </p>

      <p className="capitalize mt-2">
        {data.condition}
      </p>

      <div className="flex justify-between mt-4 text-sm">
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind} m/s</p>
      </div>
    </div>
  );
}