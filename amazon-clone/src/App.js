import React, {useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/checkout';
import Login from './components/login';
import {auth} from './firebase';
import { useStateValue } from './stateProvider';
import Payment from './components/payment';

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //[] will only run once when the app component loads
    //As soon as the app loads we attack this listner
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        //user had just logged in or is logged in
        dispatch({
          //shoot the user into the datalayer
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        //shoot the user into the datalayer as NULL
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  },[])

  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route path='/payment'>
            <Payment/>
          </Route> 
          <Route path='/login'>
            <Login/>
          </Route> 

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
