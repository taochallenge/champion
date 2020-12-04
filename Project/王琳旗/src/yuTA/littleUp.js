import React from 'react'
import './usersUp.css'

const LittleUp = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>小事编号:</p><input type='number' placeholder='请输入小事编号' /></div>
        <div className='UsersupInp'><p>小事名字:</p><input type='text' placeholder='请输入小事名字' /></div>
        <div className='UsersupInp'><p>小事时间:</p><input type='number' placeholder='请输入小事时间' /></div>
        <div className='UsersupInp'><p>小事图片路径:</p><input type='text' placeholder='请输入小事图片路径' /></div>
        <div className='UsersupInp'><p>小事完成状态:</p><input type='text' placeholder='请输入小时完成状态' /></div>
        <div className='UsersupInp'><p>地点:</p><input type="text" placeholder="请输入地点" /></div>
        <div className='UsersupInp'><p>小事描述:</p><textarea rows='4' placeholder="请输入小事描述" /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/little');
          }} /></div>
      </div>
    </div>

  )
}
export default LittleUp;