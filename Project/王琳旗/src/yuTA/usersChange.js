import React from 'react'
import './usersUp.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const UsersChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      {
        props.userslist.map((data, index) => {
          if(data.id==props.location.id){
            return (
              <div className='Usersupmain' key={index}>
                <div className='UsersupInp'><p>用户编号:</p><input type='number' placeholder={data.id} /></div>
                <div className='UsersupInp'><p>另一半编号:</p><input type='number' placeholder={data.herid} /></div>
                <div className='UsersupInp'><p>用户昵称:</p><input type='text' placeholder={data.myname} /></div>
                <div className='UsersupInp'><p>用户性别:</p><input type='text' placeholder={data.sex} /></div>
                <div className='UsersupInp'><p>用户年龄:</p><input type='number' placeholder={data.age} /></div>
                <div className='UsersupInp'><p>用户位置</p><input type="text" placeholder={data.location} /></div>
                <div className='UsersupInp'><p>用户生日:</p><input type='date' placeholder={data.birthday} /></div>
                <div className='UsersupInp'><p>相恋日期:</p><input type='date' placeholder={data.lovedata} /></div>
                <div className='UsersupInp'><p>配对码:</p><input type='text' placeholder={data.secret} /></div>
                <div className='UsersupInp'><p>粉丝数:</p><input type='number' placeholder={data.fans} /></div>
                <div className='UsersupInp'><p>关注数:</p><input type='number' placeholder={data.follow} /></div>
                <div className='UsersupInp'><p>羡慕树:</p><input type='number' placeholder={data.admire} /></div>
                <div className='UsersupInp'><p>用户电话:</p><input type='tel' placeholder={data.tel} /></div>
                <div className='UsersupInp'><p>用户在线状态:</p><input type='text' placeholder={data.state} /></div>
                <div className='UsersupInp'><p>用户密码:</p><input type='password' placeholder={data.password} /></div>
                <div className='UsersupB'><input type='submit' /></div>
                <div className='UsersupB'><input type='button' value='取消'
                  onClick={() => {
                    props.history.push('/home/users');
                  }} /></div>
              </div>
            )
          }
          
        })
      }
    </div>
  )
}
const mapStateToProps = (state) => ({
  userslist: state.userslist,
})
export default connect(mapStateToProps)(withRouter(UsersChange));
