import React, {useEffect} from 'react';
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
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else {
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

  console.log("USER IS>>>",user);

  return (
    <Router>
      <div className="app" >
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
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