import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/Nav'
import Form from './components/Form';
import RoutePath from './components/RoutePath';
import Axios from 'axios';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#2e7d32',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#c62828',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

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
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <div className='main-container'>
        <Nav />
        <div className='content'>
          <Form setRoute={setRoute} setTransfers={setTransfers} stations={stations}/>
          <RoutePath route={route} transfers={transfers} />
        </div>
      </div>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
