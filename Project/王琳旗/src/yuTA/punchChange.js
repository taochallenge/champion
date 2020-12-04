import React from 'react'
import './usersUp.css'

const PunchChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>打卡人编号:</p><input type='number' placeholder='请输入打卡人编号' /></div>
        <div className='UsersupInp'><p>打卡人时间:</p><input type='date' placeholder='请输入打卡人时间' /></div>
        <div className='UsersupInp'><p>打卡人总天数:</p><input type='number' placeholder='请输入打卡人总天数' /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/punch');
          }} /></div>
      </div>
    </div>

  )
}
export default PunchChange;