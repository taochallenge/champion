import React from 'react'
import {NavLink,Redirect,withRouter} from 'react-router-dom'
import './home.css';
import {RouteWithSubRoutes} from '../App';

const Home = ({routes}) => {
  return (
    <div className='wrapUsers'>
        <div className='headerUsers'>
            <p>遇TA后台管理系统,欢迎你<span id='welcome'>{localStorage['name']}</span></p>
        </div>
        <div className='mainUsers'>
            <div className='mainLeftUsers'>
                {
                    routes.map((route,i) => (
                        <RouteWithSubRoutes {...route} key={i}/>
                    ))
                }
                <Redirect from='/home' to='/home/users'/>
            </div>
            <ul>
                <li><NavLink to="/home/users"><p>用户管理</p></NavLink></li>
                <li><NavLink to="/home/diary"><p>日记管理</p></NavLink></li>
                <li><NavLink to="/home/chatting"><p>聊天记录</p></NavLink></li>
                <li><NavLink to="/home/punch"><p>打卡管理</p></NavLink></li>
                <li><NavLink to="/home/memory"><p>纪念日管理</p></NavLink></li>
                <li><NavLink to="/home/little"><p>小事管理</p></NavLink></li>
                <li><NavLink to="/home/centence"><p>每日一句</p></NavLink></li>
                <li><NavLink to="/home/tree"><p>种树管理</p></NavLink></li>
                <li><NavLink to="/home/collection"><p>收藏树管理</p></NavLink></li>
                <li><NavLink to="/home/admire"><p>羡慕树管理</p></NavLink></li>
                <li><NavLink to="/"><p>退出登录</p></NavLink></li>
            </ul>
        </div>
    </div>
  );
}

export default withRouter(Home);