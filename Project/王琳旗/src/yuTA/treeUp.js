import React from 'react'
import './usersUp.css'

const TreeUp = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>种树编号:</p><input type='number' placeholder='请输入种树编号' /></div>
        <div className='UsersupInp'><p>种树内容:</p><textarea rows='4' placeholder='请输入种树内容' /></div>
        <div className='UsersupInp'><p>种树图片路径:</p><input type='text' placeholder='请输入种树图片路径' /></div>
        <div className='UsersupInp'><p>相恋天数:</p><input type='number' placeholder='请输入相恋天数' /></div>
        <div className='UsersupInp'><p>羡慕人数:</p><input type='number' placeholder='请输入羡慕人数' /></div>
        <div className='UsersupInp'><p>是否被收藏:</p><input type="text" placeholder="请输入是否被收藏" /></div>
        <div className='UsersupInp'><p>种树创作者:</p><input type='text' placeholder='请输入种树创作者' /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/tree');
          }} /></div>
      </div>
    </div>

  )
}
export default TreeUp;