import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="App">
      <h1>Weather Checker</h1>
      <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Get Weather</button>
      {data && data.main && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.main.temp}°C</p>
          <p>{data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
