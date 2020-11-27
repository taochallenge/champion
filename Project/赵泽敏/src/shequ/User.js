import React from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import './User.css'
const User = ({routes},props) => {
    return (
        <div id='all1'>
            {
                    routes.map((route) => (
                        <RouteWithSubRoutes  {...route} />
                    ))
                }


                <Redirect from='/User' to='/User/Zhong' />
            <div id='nav1'>
                <div id='da'
                onClick={ () => {
                    props.history.push('/Shequ');
                } }
                ><img src={require('../imgs/jiantou.png')}/></div>
                <div id='text'>我</div>
            </div>
            <div id='body1'>
                <div id='line1'></div>
                <div id='ziliao'>
                    <div id='touxiang'><img src={require('../imgs/bg6.jpg')}/></div>
                    <div id='shuju'>
                        <p id='gzs'>1</p>
                        <p id='fss'>100</p>
                        <p id='xms'>100</p>
                    </div>
                    <div id='txt'>
                        <p id='gz'>关注</p>
                        <p id='fs'>粉丝</p>
                        <p id='xm'>被羡慕与收藏</p>
                    </div>
                    <div id='write'>
                        <p id='write1'>编辑资料</p>
                    </div>
                </div>
                <div id='line1'></div>
                <div id='content'>
                    <NavLink to='/User/Zhong'><div id='zhong'>我种的树</div></NavLink>
                    <NavLink to='/User/Shou'><div id='shou'>收藏的树</div></NavLink>
                    <NavLink to='/User/Xian'><div id='xian'>羡慕的树</div></NavLink>
                </div>
            </div>
        </div>
    )
}

export default User
