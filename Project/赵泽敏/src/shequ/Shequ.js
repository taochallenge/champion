import React from 'react'
import { NavLink, Redirect, withRouter } from 'react-router-dom'
import './shequ.css'
import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import { Switch } from 'antd-mobile';
// import Mytab from '../mytab/Mytab';


const Shequ = ({ routes }) => {
    return (
        <div>
            <div id='all'>
                {
                    routes.map((route) => (
                        <RouteWithSubRoutes  {...route} />
                    ))
                }


                <Redirect from='/Shequ' to='/Shequ/Tui' />
                <div id='nav'>

                    <ol>
                        <li><NavLink to='/user'><img
                            src={require('../imgs/wo.png')}
                            alt='未能加载成功'
                            class='wo' />
                        </NavLink></li>
                        <li><NavLink to='/Shequ/Tui'><div id='tui'>推荐</div></NavLink></li>
                        <li><NavLink to='/Shequ/Guan'><div id='guan'>关注</div></NavLink></li>
                    </ol>
                </div>
            </div>
            {/* <Mytab/> */}
        </div>
    )
}

export default withRouter(Shequ) 
