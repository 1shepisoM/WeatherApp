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
  <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center px-4">
    <div className="w-full max-w-md text-center">

      <h1 className="text-white text-4xl font-bold mb-8">
        Weather Dashboard
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
  <div className="flex justify-center mt-6">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
)}
     {error && (
  <div className="mt-6 bg-red-500/20 border border-red-400 text-red-100 p-4 rounded-xl">
    <p className="font-semibold">⚠ City not found</p>
    <p className="text-sm mt-1">Please check the spelling and try again.</p>
  </div>
)}
      {weatherData && <WeatherResults data={weatherData} />}
    </div>
  </div>
);
}

export default App;