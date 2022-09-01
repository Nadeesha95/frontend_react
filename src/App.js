import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './pages/Navbar';

import Attendance from './pages/Attendance';


import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
        <Router>

          <Navbar />

          <Switch>

            <Route exact path="/" component={Attendance} />
          

          </Switch>
        </Router>
    </div>
  );
}


export default App;