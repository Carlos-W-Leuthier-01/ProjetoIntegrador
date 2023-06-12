import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';

const Routes = () => {
  return(
      <BrowserRouter>
          <Route component = { Login }  path="/" exact />
          <Route component = { Home }  path="/home" />
      </BrowserRouter>
  )
}

export default Routes;

  