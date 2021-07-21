import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
