import React, { useEffect } from 'react'
import './users.css'
import getUsers from '../GetData/getUsers'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';

const Users = (props) => {
    useEffect(() => {
        props.dispatch(getUsers());
    }, [])
    const deleteUser = async (id) => {
        let url = '/user/' + id;
        await fetch(url, {
            method: 'DELETE'
        });
        await props.history.go(0)
    }
    return (
        <table width='1200px' rules='rows'>
            <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>用户编号</th>
                    <th>用户头像</th>
                    <th>另一半编号</th>
                    <th>用户昵称</th>
                    <th>用户性别</th>
                    <th>用户生日</th>
                    <th>相恋日期</th>
                    <th>配对码</th>
                    <th>用户电话</th>
                    <th>用户密码</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.userslist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td><img src={data.imgpath} className='UsersImg'/></td>
                                <td>{data.herid}</td>
                                <td>{data.myname}</td>
                                <td>{data.sex}</td>
                                <td>{data.birthday}</td>
                                <td>{data.lovedata}</td>
                                <td>{data.secret}</td>
                                <td>{data.tel}</td>
                                <td>{data.password}</td>
                                <td>
                                    {
                                        props.routes.map((route, i) => (
                                            <RouteWithSubRoutes {...route} key={i} />
                                        ))
                                    }
                                    <img src={require('../imgs/sc.png')} alt='' onClick={deleteUser.bind(this, data.id)}></img>
                                    <NavLink to="/home/users/usersup">
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
    userslist: state.userslist,
})
export default connect(mapStateToProps)(withRouter(Users));