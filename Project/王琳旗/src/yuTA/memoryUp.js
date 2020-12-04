import React from 'react'
import './usersUp.css'

const MemoryUp = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>纪念日编号:</p><input type='number' placeholder='请输入纪念日编号' /></div>
        <div className='UsersupInp'><p>纪念日名字:</p><input type='text' placeholder='请输入纪念日名字' /></div>
        <div className='UsersupInp'><p>纪念日时间:</p><input type='number' placeholder='请输入纪念日时间' /></div>
        <div className='UsersupInp'><p>纪念日倒计时:</p><input type='text' placeholder='请输入纪念日倒计时' /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/memory');
          }} /></div>
      </div>
    </div>

  )
}
export default MemoryUp;