import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;
