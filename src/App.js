import React, { useEffect } from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51Hz8O3GmHjC4vSOR8Ulagf5AFhTlwfDlJXtGSCYgzngqWrlNkZinv147YNb0SWZ9vOJhh3sk9qJFa5cnLyP4baSU00ksIgG2f5')

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user's not logged in
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      // clean up
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <div className="app" >
        <Switch>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
          <Header />
            <Orders />
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