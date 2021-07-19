import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/checkout';

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route path='/checkout'>
            <Checkout/>
          </Route> 

          <Route path='/'>
            <Home/>
          </Route>   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
