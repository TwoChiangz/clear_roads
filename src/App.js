import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    width: 1200,
    height: 700,
    latitude: 39.7392,
    longitude: -104.9903,
    zoom: 10
  });
  return (
    <div className="App">
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
        ></ReactMapGL>
      </header>
    </div>
  );
}

export default App;
