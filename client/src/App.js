import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import GetDetails from './components/GetDetails';
import SaveDetails from './components/SaveDetails';
import GlobalRecords from './components/GlobalRecords';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">

      <Route exact path='/' component={Home}/>
      <Route exact path='/GetDetails' component={GetDetails} />
      <Route exact path='/SaveDetails' component={SaveDetails} />
      <Route exact path='/GlobalRecords' component={GlobalRecords} />

    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
