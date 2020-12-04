import React from 'react'
import './usersUp.css'

const CentenceUp = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>句子编号:</p><input type='number' placeholder='请输入句子编号' /></div>
        <div className='UsersupInp'><p>句子内容:</p><textarea rows='4' placeholder='请输入句子内容' /></div>
        <div className='UsersupInp'><p>句子时间:</p><input type='number' placeholder='请输入句子时间' /></div>
        <div className='UsersupInp'><p>句子是否被收藏:</p><input type='text' placeholder='请输入句子是否被收藏' /></div>
        <div className='UsersupInp'><p>句子标题:</p><input type='text' placeholder='请输入句子标题' /></div>
        <div className='UsersupInp'><p>句子英文标题:</p><input type="text" placeholder="请输入句子英文标题" /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/centence');
          }} /></div>
      </div>
    </div>

  )
}
export default CentenceUp;