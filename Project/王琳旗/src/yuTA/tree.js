import React from 'react'
import './users.css'

const Tree = (props) => {
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
                    <table border="1">
                        <tr>
                            <th>账号</th>
                            <th>密码</th>
                            <th>电话</th>
                            <th>操作</th>
                            <th></th>

                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tree