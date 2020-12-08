import React from 'react'
import './users.css'
import {NavLink,withRouter} from 'react-router-dom'
import {RouteWithSubRoutes} from '../App';

const Admire = (props) => {
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>羡慕树编号</th>
                    <th>羡慕树内容</th>
                    <th>羡慕树图片路径</th>
                    <th>相恋天数</th>
                    <th>羡慕人数</th>
                    <th>是否被收藏</th>
                    <th>羡慕树时间</th>
                    <th>羡慕树者</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                    <tr align='center' >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        {
                            props.routes.map((route) => (
                                <RouteWithSubRoutes {...route}/>
                            ))
                        }
                            <img src={require('../imgs/sc.png')} alt=''></img>
                            {/* <NavLink to="/home/admire/admirechange">
                                <img src={require('../imgs/xg.png')} alt=''></img>
                            </NavLink> */}
                            <NavLink to="/home/admire/admireup">
                                <img src={require('../imgs/tj.png')} alt=''></img>
                            </NavLink>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default withRouter(Admire)