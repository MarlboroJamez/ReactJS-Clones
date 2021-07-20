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
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/orders';

const promise = loadStripe('pk_test_51JF47XKtUUbzqdKJ7w5P0VHdImcGSqFSKGMiqPjIaMjLGFT3yRqS7dF1EHanpdUNWe4HIryXNOqnuFcsMnkonPD500I8ePNMTn');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
