import React from 'react'
import './users.css'
import {NavLink} from 'react-router-dom'
import {RouteWithSubRoutes} from '../App';

const Punch = (props) => {
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>打卡人编号</th>
                    <th>打卡人时间</th>
                    <th>打卡人总天数</th>
                    <th>操作</th>
                </tr>
                <tbody>
                    <tr align='center' >
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
                            {/* <NavLink to="/home/punch/punchchange">
                                <img src={require('../imgs/xg.png')} alt=''></img>
                            </NavLink> */}
                            <NavLink to="/home/punch/punchup">
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

export default Punch