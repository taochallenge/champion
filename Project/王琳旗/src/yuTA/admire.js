import React, { useEffect } from 'react'
import './users.css'
import getAdmire from '../GetData/getAdmire'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';

const Admire = (props) => {
    useEffect(() => {
        props.dispatch(getAdmire());
    }, [])
    return (
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
                {
                    props.admirelist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.imgpath}</td>
                                <td>{data.time}</td>
                                <td>{data.countday}</td>
                                <td>{data.countadmire}</td>
                                <td>{data.uid}</td>
                                <td>
                                    {
                                        props.routes.map((route, i) => (
                                            <RouteWithSubRoutes {...route} key={i} />
                                        ))
                                    }
                                    <img src={require('../imgs/sc.png')} alt=''></img>
                                    <NavLink to="/home/admire/admireup">
                                        <img src={require('../imgs/tj.png')} alt=''></img>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
const mapStateToProps = (state) => ({
    admirelist: state.admirelist,
})

export default connect(mapStateToProps)(withRouter(Admire));