import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav'
import Form from './components/Form';
import RoutePath from './components/RoutePath';

function App() {
  const [route, setRoute] = useState([])
  return (
    <div className="App">
      <Nav />
      <Form setRoute={setRoute}/>
      <RoutePath route={route} />
    </div>
  );
}

export default App;
