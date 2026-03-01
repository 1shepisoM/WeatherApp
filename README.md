# Weather App 🌤️

A simple and interactive weather application that allows users to check the current weather of any city worldwide. The app fetches real-time weather data and displays it in an intuitive and user-friendly interface.  

## Features

- Search weather by city name.
- Display current temperature, weather condition, humidity, and wind speed.
- Responsive design for both desktop and mobile devices.
- Error handling for invalid city names or API issues.

## Installation

1. **Clone the repository**
   ```bash
   https://github.com/1shepisoM/WeatherApp.git
   ```
2. **Navigate into the project directory**
   ```bash
   cd weather-app
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Run the application**
   ```bash
   npm start
   ```
5. Open your browser

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, React.js  
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)  
- **Styling:** Tailwind CSS  

## Usage

1. Enter the name of a city in the search bar.  
2. Press **Enter** or click the **Search Icon** button.  
3. View the weather information displayed for the selected city.  

## API Key Setup

To fetch live weather data, you need an API key from [OpenWeatherMap](https://openweathermap.org/api).  

1. Sign up and get your API key.  
2. Create a `.env` file in the root directory and add:  
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
3. Restart your development server.
