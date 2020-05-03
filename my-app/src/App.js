import React from 'react';
import './App.css';
import Nav from './components/nav';
import Login from './components/login/login';
import Register from './components/login/register';
import Weather from './components/weather/weather';
import Convid from './components/convid/convid';
import Logout from './components/login/logout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav/> */}
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/register' component={Register}/>
          <Route path='/weather' component={Weather}/>
          <Route path='/convid' component={Convid}/>
        </Switch>
    </div>
    </Router>
  );
}


export default App;
