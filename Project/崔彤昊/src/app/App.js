import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../login/login';
import Pairing from '../pairing/pairing';
import Register from '../register/register';
import Message from '../message/message';
import Mine from '../mine/mine';
import Mineinfor from '../mineinfor/mineinfor';
import Set from '../set/set';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/pairing" component={Pairing} />
          <Route path="/message" component={Message} />
          <Route path="/register" component={Register} />
          <Route path="/mine" component={Mine} />
          <Route path="/mineinfor" component={Mineinfor} />
          <Route path="/set" component={Set} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    )
  }
}
