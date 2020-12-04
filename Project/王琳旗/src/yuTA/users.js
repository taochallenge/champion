import React,{useEffect} from 'react'
import './users.css'
import getUsers from '../GetData/getUsers'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Users = (props) => {
    useEffect(() => {
        props.dispatch(getUsers());
    }, [])
    return (
        <div className='wrapUsers'>
            <div className='mainUsers'>
                <table width='1200px' rules='rows'>
                    <tr bgcolor='#E6E6E6'>
                        <th>用户编号</th>
                        <th>另一半编号</th>
                        <th>用户昵称</th>
                        <th>另一半昵称</th>
                        <th>用户性别</th>
                        <th>用户年龄</th>
                        <th>用户位置</th>
                        <th>用户生日</th>
                        <th>另一半生日</th>
                        <th>相恋日期</th>
                        <th>配对码</th>
                        <th>粉丝数</th>
                        <th>关注数</th>
                        <th>羡慕树</th>
                        <th>用户电话</th>
                        <th>用户在线状态</th>
                        <th>用户密码</th>
                        <th>操作</th>
                    </tr>
                    <tbody>
                    {
                        props.userslist.map((data,index)=> {
                            return (
                                <tr align='center' key={index} >
                                    <td>{data.id}</td>
                                    <td>{data.herid}</td>
                                    <td>{data.myname}</td>
                                    <td>{data.hername}</td>
                                    <td>{data.sex}</td>
                                    <td>{data.age}</td>
                                    <td>{data.location}</td>
                                    <td>{data.birthday}</td>
                                    <td>{data.herbirthday}</td>
                                    <td>{data.lovedata}</td>
                                    <td>{data.secret}</td>
                                    <td>{data.fans}</td>
                                    <td>{data.follow}</td>
                                    <td>{data.admire}</td>
                                    <td>{data.tel}</td>
                                    <td>{data.state}</td>
                                    <td>{data.password}</td>
                                    <td>
                                        <img src={require('../imgs/sc.png')} alt=''></img>
                                        <img src={require('../imgs/xg.png')} alt=''></img>
                                        <img src={require('../imgs/tj.png')} alt=''></img>
                                    </td>
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
    userslist: state.userslist,
})
export default connect(mapStateToProps)(withRouter(Users));