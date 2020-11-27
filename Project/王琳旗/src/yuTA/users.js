import React from 'react'
import './users.css'

const Users = (props) => {
    return (
        <div class='wrapUsers'>
            <div class='headerUsers'>
                <p>遇TA后台管理系统</p>
            </div>
            <div class='mainUsers'>
                <div class='mainLeftUsers'>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/users');
                    }}>用户信息</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/diary');
                    }}>日记管理</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/chatting');
                    }}>聊天记录</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/punch');
                    }}>打卡管理</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/memory');
                    }}>纪念日管理</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/little');
                    }}>小事管理</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/centence');
                    }}>每日一句</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/tree');
                    }}>种树管理</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/collection');
                    }}>收藏树管理</button>
                    <button class='btnUsers' 
                        onClick={()=>{
                            props.history.push('/admire');
                    }}>羡慕树管理</button>
                    <button class='btnUsersOut' 
                        onClick={()=>{
                            props.history.push('/');
                    }}>退出登录</button>
                </div>
                <div class='mainRightUsers'>
                    <table width='1200px' rules='rows'>
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
                        <tr align='center'>
                            <td>1</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>2</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>3</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>4</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>5</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>6</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>7</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>8</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>9</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>10</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>11</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                        <tr align='center'>
                            <td>12</td>
                            <td>啊啊啊</td>
                            <td>女</td>
                            <td>20</td>
                            <td>北京市</td>
                            <td>2000.11.11</td>
                            <td>2018.10.10</td>
                            <td>456789</td>
                            <td>12345678912</td>
                            <td>1</td>
                            <td>123456</td>
                            <td>
                                <button>删除</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users