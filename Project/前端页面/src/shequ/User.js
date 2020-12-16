import React from 'react'
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import './css/User.css'
let imgpath = ''
const User = ({routes}) => {
    
        fetch('/getimage/'+localStorage['id'])
        .then(res=>res.json())
        .then(res=>imgpath=res[0].imgpath)
    
    return (
        
        <div>
            {
                routes.map((route) => (
                    <RouteWithSubRoutes  {...route} />
                ))
            }
            <Redirect from='/user' to='/user/zhong' />
            <div id='all1'>
            
                <div id='nav1'>
                    
                    <NavLink to='/shequ'>
                        <div id='da'>
                        <img src={require('../imgs/jt.png')}/>
                        </div>
                    </NavLink>
                    <div id='text'>我</div>
                </div>
                <div id='body1'>
                    <div id='line1'></div>
                    <div id='ziliao'>
                        <div id='touxiang'><img src={imgpath}/></div>
                        <div id='shuju'>
                            <p id='gzs'>1</p>
                            <p id='fss'>100</p>
                            <p id='xms'>100</p>
                        </div>
                        <div id='txt'>
                            <p id='gz'>关注</p>
                            <p id='fs'>羡慕</p>
                            <p id='xm'>收藏</p>
                        </div>
                        <div id='write'>
                            <p id='write1'>编辑资料</p>
                        </div>
                    </div>
                    <div id='line1'></div>
                    <div id='content'>
                        <NavLink to='/user/zhong'><a id='zhong'>我种的树</a></NavLink>
                        <NavLink to='/user/shou'><a id='shou'>收藏的树</a></NavLink>
                        <NavLink to='/user/xian'><a id='xian'>羡慕的树</a></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(User)
