import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/Nav'
import Form from './components/Form';
import RoutePath from './components/RoutePath';
import Axios from 'axios';

function App() {
  const [route, setRoute] = useState([])
  const [transfers, setTransfers] = useState('')
  const [stations, setStations] = useState([])

  useEffect(() => {
    Axios.get('https://subway-graph-api-heroku.herokuapp.com/stations')
    .then(res => {
      setStations(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <div className='main-container'>
        <Nav />
        <div className='content'>
          <Form setRoute={setRoute} setTransfers={setTransfers} stations={stations}/>
          <RoutePath route={route} transfers={transfers} />
        </div>
      </div>
    </div>
  );
}

export default App;
