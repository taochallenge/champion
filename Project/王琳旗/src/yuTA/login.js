import React from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'

const Login = (props) => {
    return (
        <div className='wrapLogin'>
            <img src={require('../imgs/wo2.png')} alt='' className='mainI'></img>
            <input className='mainLogin' placeholder='账户名' />
            <input className='mainLogin' placeholder='密码' />
            <button className='mainLogin'
                onClick={()=>{
                    props.history.push('/home');
            }}>登录</button>
        </div>
    )
}

export default withRouter(Login)