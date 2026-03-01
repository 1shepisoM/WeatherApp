import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherResults from "./components/WeatherResults";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "c2851d00839f6c1703f0e89273eb4d87";

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      const formattedData = {
        name: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
      };

      setWeatherData(formattedData);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-teal-600 flex flex-col items-center py-12">
      <h1 className="text-white text-4xl font-bold mb-8">
        Weather Dashboard
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-200">{error}</p>}

      {weatherData && <WeatherResults data={weatherData} />}
    </div>
  );
}

export default App;