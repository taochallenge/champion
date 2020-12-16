import React from 'react'
import { NavLink, Redirect, withRouter } from 'react-router-dom'
import './home.css';
import { RouteWithSubRoutes } from '../App';

const Home = ({ routes }) => {
    return (
        <div className='wrapUsers'>
            <div className='headerUsers'>
                <p>遇TA后台管理系统,欢迎你<span id='welcome'>{localStorage['name']}</span></p>
            </div>
            <div className='mainUsers'>
                {
                    routes.map((route, i) => (
                        <RouteWithSubRoutes {...route} key={i} />
                    ))
                }
                <ul>
                    <li><NavLink to="/home/users"><p>用户管理</p></NavLink></li>
                    <li><NavLink to="/home/diary"><p>日记管理</p></NavLink></li>
                    <li><NavLink to="/home/comment"><p>评论管理</p></NavLink></li>
                    <li><NavLink to="/home/memory"><p>纪念日管理</p></NavLink></li>
                    <li><NavLink to="/home/little"><p>小事管理</p></NavLink></li>
                    <li><NavLink to="/home/centence"><p>每日一句</p></NavLink></li>
                    <li><NavLink to="/home/tree"><p>种树管理</p></NavLink></li>
                    <li><NavLink to="/"><p>退出登录</p></NavLink></li>
                </ul>
            </div>
        </div>

    );
}

export default withRouter(Home);