import React from 'react'
import './usersUp.css'

const ChattingChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>记录编号:</p><input type='number' placeholder='请输入记录编号' /></div>
        <div className='UsersupInp'><p>记录内容:</p><input type='text' placeholder='请输入记录内容' /></div>
        <div className='UsersupInp'><p>记录图片路径:</p><input type='text' placeholder='请输入记录图片路径' /></div>
        <div className='UsersupInp'><p>记录视频路径:</p><input type='text' placeholder='请输入记录视频路径' /></div>
        <div className='UsersupInp'><p>记录时间:</p><input type='number' placeholder='请输入记录时间' /></div>
        <div className='UsersupInp'><p>记录位置:</p><input type="text" placeholder="请输入记录位置" /></div>
        <div className='UsersupInp'><p>记录创作者:</p><input type="text" placeholder="请输入记录创作者" /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/chatting');
          }} /></div>
      </div>
    </div>

  )
}
export default ChattingChange;