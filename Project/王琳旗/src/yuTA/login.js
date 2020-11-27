import React from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'

const Login = (props) => {
    return (
        <div class='wrapLogin'>
            <i className='iconfont icon-buoumaotubiao03' id='mainI'></i>
            <input class='mainLogin' placeholder='账户名' />
            <input class='mainLogin' placeholder='密码' />
            <button class='mainLogin'
                onClick={()=>{
                    props.history.push('/users');
            }}>登录</button>
        </div>
    )
}

export default withRouter(Login)