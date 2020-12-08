import React from 'react'
import './users.css'
import {NavLink} from 'react-router-dom'
import {RouteWithSubRoutes} from '../App';

const Chatting = (props) => {
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
                <table width='1200px' rules='rows'>
                    <tr bgcolor='#E6E6E6'>
                        <th>记录编号</th>
                        <th>记录内容</th>
                        <th>记录图片路径</th>
                        <th>记录视频路径</th>
                        <th>记录时间</th>
                        <th>记录位置</th>
                        <th>记录创作者</th>
                        <th>操作</th>
                    </tr>
                    <tbody>
                    <tr align='center' >
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
                            {/* <NavLink to="/home/chatting/chattingchange">
                                <img src={require('../imgs/xg.png')} alt=''></img>
                            </NavLink> */}
                            <NavLink to="/home/chatting/chattingup">
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

export default Chatting
