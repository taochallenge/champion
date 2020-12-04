import React from 'react'
import './users.css'
import {NavLink} from 'react-router-dom'
import {RouteWithSubRoutes} from '../App';

const Collection = (props) => {
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>收藏树编号</th>
                    <th>收藏树内容</th>
                    <th>收藏树图片路径</th>
                    <th>相恋天数</th>
                    <th>羡慕人数</th>
                    <th>收藏树时间</th>
                    <th>收藏树者</th>
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
                            <NavLink to="/home/collection/collectionchange">
                                <img src={require('../imgs/xg.png')} alt=''></img>
                            </NavLink>
                            <NavLink to="/home/collection/collectionup">
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

export default Collection