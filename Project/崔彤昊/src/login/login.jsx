// import React, { Component } from 'react';
import React, { Component, Fragment } from 'react';
import { createBrowserHistory } from 'history';
import './login.css';
// import qq from '../img/qq.png'
export default class Login extends Component {

  register() {
    let history = createBrowserHistory();
    history.push('/register');
    history.go();
  }
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className="container">
        <div className="container-temp">
          <Fragment>
            <div className={this.state.show ? 'show' : 'hide'}>
              <h1 className="app-title">遇TA</h1>
              <div className="btn-group">
                <button className="btn none-default">登录</button>
                <button className="btn none-default" onClick={this.register}>注册</button>
              </div>
              {/* <div>
                <img src={qq}/> 
              </div> */}
            </div>
          </Fragment>
        </div>
      </div>
    )
  }
}
