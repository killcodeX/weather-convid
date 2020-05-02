import React from 'react';
import './App.css';
import Nav from './components/nav';
import Login from './components/login/login';
import Register from './components/login/register';
import Weather from './components/weather/weather';
import Convid from './components/convid/convid';
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
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/weather' component={Weather}/>
          <Route path='/convid' component={Convid}/>
        </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
