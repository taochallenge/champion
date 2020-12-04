import React from 'react'
import './usersUp.css'

const AdmireChange = (props) => {
  return (
    <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <div className='Usersupmain'>
              <div className='UsersupInp'><p>羡慕树编号:</p><input type='number' placeholder='请输入羡慕树编号' /></div>
              <div className='UsersupInp'><p>羡慕树内容:</p><input type='text' placeholder='请输入羡慕树内容' /></div>
              <div className='UsersupInp'><p>羡慕树图片路径:</p><input type='text' placeholder='请输入羡慕树图片路径' /></div>
              <div className='UsersupInp'><p>相恋天数:</p><input type='number' placeholder='请输入相恋天数' /></div>
              <div className='UsersupInp'><p>羡慕人数:</p><input type='number' placeholder='请输入羡慕人数' /></div>
              <div className='UsersupInp'><p>是否被收藏:</p><input type="text" placeholder="请输入是否被收藏" /></div>
              <div className='UsersupInp'><p>羡慕树时间:</p><input type='number' placeholder='请输入羡慕树时间' /></div>
              <div className='UsersupInp'><p>羡慕树者:</p><input type='text' placeholder='请输入羡慕树者' /></div>
              <div className='UsersupB'><input type='submit'/></div>
              <div className='UsersupB'><input type='button' value='取消'  
                onClick={()=>{
                  props.history.push('/home/admire');
                }}/></div>
            </div>
        </div>
    
      )
    }
export default AdmireChange;