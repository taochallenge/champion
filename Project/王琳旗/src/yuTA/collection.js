import React, { useEffect } from 'react'
import './users.css'
import getCollection from '../GetData/getCollection'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';

const Collection = (props) => {
    useEffect(() => {
        props.dispatch(getCollection());
    }, [])
    return (
        <table width='1200px' rules='rows'>
            <thead>
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
            </thead>
            <tbody>
                {
                    props.collectionlist.map((data, index) => {
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
                                    <NavLink to="/home/collection/collectionup">
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
    collectionlist: state.collectionlist,
})

export default connect(mapStateToProps)(withRouter(Collection));