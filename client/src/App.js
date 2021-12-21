import axios from 'axios';
import { Route, Switch } from 'react-router';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Taco from './components/Taco';
import Foot from './components/Foot';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Profile />
      <Taco />
      <Foot />
    </div>
  );
}

export default App;
