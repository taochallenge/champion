import React, { Component, Fragment } from 'react';
import './login.css';
import qq from '../img/qq.png'
import weixin from '../img/weixin.png'
import weibo from '../img/weibo.png'

export default class Login extends Component {
  constructor() {
    super();
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
                <button className="btn none-default" onClick={()=>this.props.history.push('/pairing')}>登录</button>
                <button className="btn nonClick={this.register}one-default" onClick={()=>this.props.history.push('/register')}>注册</button>
              </div>
              <div className="image">
                <a href=" https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&redirect_uri=http%3A%2F%2Fspcdp.cdposs.qq.com%2Fauth%2Fcallback&client_id=101477813&state=http%3A%2F%2Fspcdp.cdposs.qq.com%2F"><img src={qq} /></a>
                <a href="#"><img src={weixin} /></a>
                <a href="#"><img src={weibo} /></a>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    )
  }
}
