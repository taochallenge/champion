import React, { useEffect } from 'react'
import './users.css'
import getChatting from '../GetData/getChatting'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';

const Chatting = (props) => {
    useEffect(() => {
        props.dispatch(getChatting());
    }, [])
    return (
        <table width='1200px' rules='rows'>
            <thead>
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
            </thead>
            <tbody>
                {
                    props.chattinglist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.imgpath}</td>
                                <td>{data.videopath}</td>
                                <td>{data.time}</td>
                                <td>{data.uid}</td>
                                <td>
                                    {
                                        props.routes.map((route, i) => (
                                            <RouteWithSubRoutes {...route} key={i} />
                                        ))
                                    }
                                    <img src={require('../imgs/sc.png')} alt=''></img>
                                    <NavLink to="/home/chatting/chattingup">
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
    chattinglist: state.chattinglist,
})

export default connect(mapStateToProps)(withRouter(Chatting));
