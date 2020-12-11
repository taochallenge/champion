import React, { useEffect } from 'react'
import './users.css'
import getTree from '../GetData/getTree'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';

const Tree = (props) => {
    useEffect(() => {
        props.dispatch(getTree());
    }, [])
    const deleteTree = (id) => {
        let url = '/tree/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        props.history.push('/home/tree')
    }
    return (
        <table width='1200px' rules='rows'>
            <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>种树编号</th>
                    <th>种树内容</th>
                    <th>种树图片路径</th>
                    <th>相恋天数</th>
                    <th>羡慕人数</th>
                    <th>是否被收藏</th>
                    <th>种树创作者</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.treelist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.imgpath}</td>
                                <td>{data.countday}</td>
                                <td>{data.countadmire}</td>
                                <td>{data.collect == 1 ? '已收藏' : '未收藏'}</td>
                                <td>{data.uid}</td>
                                <td>
                                    {
                                        props.routes.map((route, i) => (
                                            <RouteWithSubRoutes {...route} key={i} />
                                        ))
                                    }
                                    <img src={require('../imgs/sc.png')} alt='' onClick={deleteTree.bind(this, data.id)}></img>
                                    {/* <NavLink to={{
                                            pathname:"/home/tree/treechange",
                                            id:data.id
                                        }}>
                                            <img src={require('../imgs/xg.png')} alt=''></img>
                                        </NavLink> */}
                                    <NavLink to="/home/tree/treeup">
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
    treelist: state.treelist,
})

export default connect(mapStateToProps)(withRouter(Tree));