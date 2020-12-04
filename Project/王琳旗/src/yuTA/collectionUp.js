import React from 'react'
import './usersUp.css'

const CollectionUp = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      <div className='Usersupmain'>
        <div className='UsersupInp'><p>收藏树编号:</p><input type='number' placeholder='请输入收藏树编号' /></div>
        <div className='UsersupInp'><p>收藏树内容:</p><input type='text' placeholder='请输入收藏树内容' /></div>
        <div className='UsersupInp'><p>收藏树图片路径:</p><input type='text' placeholder='请输入收藏树图片路径' /></div>
        <div className='UsersupInp'><p>相恋天数:</p><input type='number' placeholder='请输入相恋天数' /></div>
        <div className='UsersupInp'><p>羡慕人数:</p><input type='number' placeholder='请输入羡慕人数' /></div>
        <div className='UsersupInp'><p>收藏树时间:</p><input type="number" placeholder="请输入收藏树时间" /></div>
        <div className='UsersupInp'><p>收藏树者:</p><input type="text" placeholder="请输入收藏树者" /></div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            props.history.push('/home/collection');
          }} /></div>
      </div>
    </div>

  )
}
export default CollectionUp;