import React from 'react'
import { NavLink, Redirect, withRouter } from 'react-router-dom'
import './css/shequ.css'
import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import { Switch } from 'antd-mobile';
import Mytab from '../index/Mytab';


const Shequ = ({ routes }) => {
    return (
        <div>
            <div id='all'>
                {
                    routes.map((route) => (
                        <RouteWithSubRoutes  {...route} />
                    ))
                }
                <Redirect from='/shequ' to='/shequ/tui' />
                <div id='shequ-nav'>
                    <ol>
                        <li><NavLink to='/user'><img
                            src={require('../imgs/wo.png')}
                            alt='未能加载成功'
                            className='wo' />
                        </NavLink></li>
                        <li><NavLink to='/shequ/tui'><a id='tui'>推荐</a></NavLink></li>
                        <li><NavLink to='/shequ/guan'><a id='guan'>关注</a></NavLink></li>
                    </ol>
                </div>
            </div>
            <Mytab/>
        </div>
    )
}

export default withRouter(Shequ) 
