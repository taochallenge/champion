import React, { Component } from 'react';
import '../login/login.css';
import './register.css';
export default class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-temp">
          <h1 className="app-title app-title-2">遇TA</h1>
          <div className="input-group">
            <input className="reg-input none-default" placeholder="请输入手机号"></input>
            <input type='password' className="reg-input none-default" placeholder="请输入密码"></input>
            <input type='password' className="reg-input none-default" placeholder="请再次输入密码"></input>
          </div>
          <button className="reg-btn none-default" onClick={()=>this.props.history.push('/login')}>注册</button>
        </div>
      </div>
    )
  }
}