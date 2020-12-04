import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../login/login';
import Pairing from '../pairing/pairing';
import Register from '../register/register';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/pairing" component={Pairing} />
          
          <Route path="/register" component={Register} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    )
  }
}
