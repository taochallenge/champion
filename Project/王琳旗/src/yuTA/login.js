import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            passwd:''
        };
    }

    changeUsername = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    changePasswd = (e) => {
        this.setState({
            passwd: e.target.value
        })
    }
    comparePassword = (passwd, callback) => {
        if (localStorage.getItem('passwd') === passwd) {
            callback();
        }
        else {
            alert('密码错误');
        }
    }
    login = (name, passwd, callback) => {
        console.log(name);

        fetch('/adminlogin/' + name)
            .then(async res => {
                if (!res.ok) {
                    let errtext = await res.text()
                    throw new Error(`${res.status} : ${errtext}`)
                } else {
                    return res.json()
                }
            })
            .then(d => {
                if (d.length!=0) {
                    localStorage.setItem('name', `${d[0].name}`)
                    localStorage.setItem('passwd', `${d[0].passwd}`)
                    this.comparePassword(passwd, callback)
                } else {
                    alert('用户名错误')
                }
            })

    }
    render() {
        localStorage.removeItem('name')
        localStorage.removeItem('passwd')
        return (
            <form className='wrapLogin'>
                <img src={require('../imgs/wo2.png')} alt='' className='mainI'></img>
                <input type='text' className='mainLogin' name='username' onChange={this.changeUsername} placeholder='账户名' />
                <input type='password' className='mainLogin' name='passwd' onChange={this.changePasswd} placeholder='密码' />
                <div className='mainLogin' 
                    onClick={()=>{
                        this.login(
                            this.state.name,
                            this.state.passwd,
                            ()=>{
                                this.props.history.push('/home')
                            })
                    }}>登录</div>
            </form>
        )
    }

}

export default withRouter(Login)