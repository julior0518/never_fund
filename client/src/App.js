import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route exact path="/" render={Landing} />
        <Route exact path="/profile" render={Profile} />
        <Route exact path="/taco" render={Taco} />
      </Switch>
      <Foot />
    </div>
  );
}

export default App;
