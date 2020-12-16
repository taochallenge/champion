import React, { Component } from 'react';
import './css/enter.css';
import warm from './img/warm.png'


export default class Message extends Component {
  constructor(props){
    super(props)
  }
  state = {
    tel: '',
    password: '',
    isOpen: false,
    info: ''
  }
  change = (type, e) => {
    this.setState({
      [type]: e.target.value
    })
  }
  btn() {
    let { tel, password, isOpen, exist } = this.state;
    if (tel=='') return this.setState({ isOpen: !isOpen, info: "请输入手机号" })
    if (!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(tel))) return this.setState({ isOpen: !isOpen, info: "请输入正确的手机号" })
    if (!password) return this.setState({ isOpen: !isOpen, info: "密码不能为空" })
    if (password != localStorage['password']) return this.setState({ isOpen: !isOpen, info: "密码错误" })
    if (exist==0) return this.setState({ isOpen: !isOpen, info: "不存在该用户" })
    // if (password == localStorage['password']) this.props.history.push('/home')
  }

    comparePassword = (passwd, callback1, callback2) => {
        if (localStorage.getItem('password') === passwd) {
            if (localStorage['herid'] === 'null') {
                callback1()
            } else {
                callback2()
            }
            // alert('登陆成功')
            this.btn()
        }
        else {
            // alert('密码错误');
          this.btn()
        }
    }
    login = (tel, passwd, callback1, callback2) => {
        console.log(this.state);
        if (this.state.tel) {
            fetch('/user/' + tel)
                .then(async res => {
                    if (!res.ok) {
                        let errtext = await res.text()
                        throw new Error(`${res.status} : ${errtext}`)
                    } else {
                        return res.json()
                    }
                })
                .then(d => {
                    if (d.length != 0) {
                        this.setState({exist:1})
                        localStorage.setItem('id', `${d[0].id}`)
                        localStorage.setItem('herid', `${d[0].herid}`)
                        localStorage.setItem('tel', `${d[0].tel}`)
                        localStorage.setItem('password', `${d[0].password}`)
                        localStorage.setItem('secret', `${d[0].secret}`)
                        this.comparePassword(passwd, callback1, callback2)
                    } else {
                        // alert('用户名错误')
                        this.setState({exist:0})
                        this.btn()
                    }
                })
        } else {
            // alert('请输入手机号码')
          this.btn()
        }
      }
  
  render() {
    let { tel, password, isOpen, info } = this.state
    return (
      <div className="container">
        <div className="container-temp ">
          <div className='entertitle'>
            <div className="wxl" onClick={() => this.props.history.push('/login')}></div>遇TA
                </div>
          <div className="puten">

            <div className="import00" ><input onChange={(e) => this.change("tel", e)} defaultValue={tel} className="reg-input none-default" placeholder="请输入手机号"></input></div>
            <div className="import00" ><input type="password" onChange={(e) => this.change("password", e)} defaultValue={password} className="reg-input none-default" placeholder="请输入密码"></input></div>

          </div>
          <div className="next">
            <button className="ent-btn none-default"
              // onClick={this.btn.bind(this)}
            onClick={
                this.login.bind(
                    this,
                    this.state.tel,
                    this.state.password,
                    () => {
                        this.props.history.push('/pairing')
                    },
                    () => {
                        this.props.history.push('/home')
                    })
            }
            >登录</button>
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
        </div>
      </div>
    )
  }
}




