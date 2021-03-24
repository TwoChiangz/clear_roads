import React, { useState } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';

import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    width: 1200,
    height: 700,
    latitude: 39.7392,
    longitude: -104.9903,
    zoom: 10
  });

  const [weather, setWeather] = useState({
    main: undefined,
    fahrenheit: undefined,
    description: "",
    error: false
  });

  const calFahrenheit = (temp) => {
    let fah = Math.floor((temp - 273.15) * (9/5)) + 32
    return fah;
  };

  const getWeather = async (e) => {
    console.log(e.lngLat);
    const lon = e.lngLat[0];
    const lat = e.lngLat[1];
    
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
  
    const response = await api_call.json();
    console.log(response);
    setWeather({
      main: response.weather[0].main,
      fahrenheit: calFahrenheit(response.main.temp),
      description: response.weather[0].description,
      error: false
    });
    console.log(weather);
  };


  
  return (
    <div className="App" id='root'>
      <header className="App-header">
        <h1>
          Clear Roads
        </h1>
        <p>Click on the map to see if the roads are cleared in the area</p>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle={process.env.REACT_APP_MAPSTYLE}
          onViewportChange={nextViewport => setViewport(nextViewport)}
          onClick={getWeather}
        >
        </ReactMapGL>
      </header>
    </div>
  );
}

export default App;
