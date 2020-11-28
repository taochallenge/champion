import React from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'

const Login = (props) => {
    return (
        <div class='wrapLogin'>
            <img src={require('../imgs/wo.png')}></img>
            <input class='mainLogin' placeholder='账户名' />
            <input class='mainLogin' placeholder='密码' />
            <button class='mainLogin'
                onClick={()=>{
                    props.history.push('/home');
            }}>登录</button>
        </div>
    )
}

export default withRouter(Login)