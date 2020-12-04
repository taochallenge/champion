import React from 'react'
import './usersUp.css'

const UsersUp = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>用户编号:</p><input type='number' placeholder='请输入用户编号' /></div>
        <div className='UsersupInp'><p>另一半编号:</p><input type='number' placeholder='请输入另一半编号' /></div>
        <div className='UsersupInp'><p>用户昵称:</p><input type='text' placeholder='请输入用户昵称' /></div>
        <div className='UsersupInp'><p>用户性别:</p><input type='text' placeholder='请输入用户性别' /></div>
        <div className='UsersupInp'><p>用户年龄:</p><input type='number' placeholder='请输入用户年龄' /></div>
        <div className='UsersupInp'><p>用户位置</p><input type="text" placeholder="请选择地点" /></div>
        <div className='UsersupInp'><p>用户生日:</p><input type='date' placeholder='请输入用户生日' /></div>
        <div className='UsersupInp'><p>相恋日期:</p><input type='date' placeholder='请输入相恋日期' /></div>
        <div className='UsersupInp'><p>配对码:</p><input type='text' placeholder='请输入配对码' /></div>
        <div className='UsersupInp'><p>粉丝数:</p><input type='number' placeholder='请输入粉丝数' /></div>
        <div className='UsersupInp'><p>关注数:</p><input type='number' placeholder='请输入关注数' /></div>
        <div className='UsersupInp'><p>羡慕树:</p><input type='number' placeholder='请输入羡慕树' /></div>
        <div className='UsersupInp'><p>用户电话:</p><input type='tel' placeholder='请输入用户电话' /></div>
        <div className='UsersupInp'><p>用户在线状态:</p><input type='text' placeholder='请输入用户在线状态' /></div>
        <div className='UsersupInp'><p>用户密码:</p><input type='password' placeholder='请输入用户密码' /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/users');
          }} /></div>
      </div>
    </div>

  )
}
export default UsersUp;
