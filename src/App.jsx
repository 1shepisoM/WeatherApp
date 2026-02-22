import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherResults from "./components/WeatherResults";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  // Temporary dummy data (API comes next week)
  const handleSearch = (city) => {
    const fakeData = {
      name: city,
      temperature: 28,
      condition: "Sunny",
      humidity: 65,
      wind: 12,
    };

    setWeatherData(fakeData);
  };

  return (
    <div className="min-h-screen bg-teal-600 flex flex-col items-center py-12">
      <h1 className="text-white text-4xl font-bold mb-8">
        Weather Dashboard
      </h1>

      <SearchBar onSearch={handleSearch} />

      {weatherData && <WeatherResults data={weatherData} />}
    </div>
  );
}

export default App;