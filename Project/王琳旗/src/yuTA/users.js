import React from 'react'
import './users.css'
import getUsers from '../GetData/getUsers'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Users = (props) => {
    props.dispatch(getUsers())
    return (
        <div class='wrapUsers'>
            <div class='mainUsers'>
                    <table width='1200px' rules='rows'>
                        <thead>
                        <tr bgcolor='#E6E6E6'>
                            <th>用户编号</th>
                            <th>用户昵称</th>
                            <th>用户性别</th>
                            <th>用户年龄</th>
                            <th>用户位置</th>
                            <th>用户生日</th>
                            <th>相恋日期</th>
                            <th>配对码</th>
                            <th>用户电话</th>
                            <th>用户在线状态</th>
                            <th>用户密码</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.users.map((user,index)=> {
                                return (
                                    <tr align='center' key={index} >
                                        <td>{user.id}</td>
                                        <td>{user.myname}</td>
                                        <td>{user.sex}</td>
                                        <td>{user.age}</td>
                                        <td>{user.location}</td>
                                        <td>{user.birthday}</td>
                                        <td>{user.location}</td>
                                        <td>{user.secret}</td>
                                        <td>{user.tel}</td>
                                        <td>{user.sex}</td>
                                        <td>{user.password}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    users: state.users,
})

export default connect(mapStateToProps)(withRouter(Users));