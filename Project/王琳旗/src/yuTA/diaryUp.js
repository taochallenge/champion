import React from 'react'
import './usersUp.css'

const DiaryUp = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>日记编号:</p><input type='number' placeholder='请输入日记编号' /></div>
        <div className='UsersupInp'><p>日记内容:</p><textarea rows='4' placeholder='请输入日记内容' /></div>
        <div className='UsersupInp'><p>日记图片路径:</p><input type='text' placeholder='请输入日记图片路径' /></div>
        <div className='UsersupInp'><p>日记视频路径:</p><input type='text' placeholder='请输入日记视频路径' /></div>
        <div className='UsersupInp'><p>日记时间:</p><input type='number' placeholder='请输入日记时间' /></div>
        <div className='UsersupInp'><p>日记创作者:</p><input type="text" placeholder="请输入日记创作者" /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/diary');
          }} /></div>
      </div>
    </div>

  )
}
export default DiaryUp;