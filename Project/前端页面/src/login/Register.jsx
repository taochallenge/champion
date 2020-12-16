
import React, { Component } from 'react';
import './css/login.css';
import './css/register.css';
import warm from './img/warm.png'
export default class Register extends Component {

  state = {
    tel: '',
    password: '',
    re_password: '',
    isOpen: false,
    info: ''
  }
  change = (type, e) => {
    this.setState({
      [type]: e.target.value
    })
  }
  btn() {
    let { tel, password, re_password, isOpen } = this.state;
    if (!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(tel))) return this.setState({ isOpen: !isOpen, info: "请输入正确的手机号" })
    if (password != re_password) return this.setState({ isOpen: !isOpen, info: "两次输入密码不一致，请重新输入" })
    if (!password || !re_password) return this.setState({ isOpen: !isOpen, info: "密码不能为空" })
    if (password = re_password) this.props.history.push('/message')
  }
  register = () => {
    console.log(this.state);
    if (this.state.password) {
      if (this.state.password != this.state.re_password) {
        this.btn()
      }
      else {
        fetch('/registeruser', {
          method: 'POST',
          headers: {
            'content-type': 'text/plain'
          },
          body: JSON.stringify({
            tel: this.state.tel,
            password: this.state.password
          })
        })
        if (this.state.tel) {
          localStorage['tel'] = this.state.tel
          localStorage['password'] = this.state.password
          // alert('注册成功')
          this.btn()
        }
      }
    } else {
      // alert('请输入密码')
      this.btn()
    }
  }
  render() {
    let { tel, password, re_password, isOpen, info } = this.state
    return (

      <div className="container">

        <div className="wxl" onClick={() => this.props.history.push('/login')}></div>

        {/* <div className="wxl" onClick={() => this.props.history.push('/login')}></div> */}

        <div className="container-temp">
          <h1 className="app-title app-title-2">遇TA</h1>
          <div className="input-group">
            <input onChange={(e) => this.change("tel", e)} defaultValue={tel} className="reg-input none-default" placeholder="请输入手机号"></input>
            <input type="password" onChange={(e) => this.change("password", e)} defaultValue={password} className="reg-input none-default" placeholder="请输入密码"></input>
            <input type="password" onChange={(e) => this.change("re_password", e)} defaultValue={re_password} className="reg-input none-default" placeholder="请再次输入密码"></input>
          </div>
          <div onClick={this.register.bind(this)} className="reg-btn none-default" >注册</div>
        </div>
        {
          isOpen && <div className="model_">
            <div className="content">
              <img className="imga" src={warm} alt="" />
              <div className="title">提示</div>
              <div className="info">{info}</div>
              <div onClick={() => this.setState({ isOpen: !isOpen })} className="btn_cancel">确定</div>
            </div>
          </div>
        }
      </div>
    )
  }
}
