import React from 'react'
import './usersUp.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const LittleChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      {
        props.littlelist.map((data, index) => {
          if (data.id == props.location.id) {
            return (
              <div className='Usersupmain' key={index}>
                <div className='UsersupInp'><p>小事编号:</p><input type='number' placeholder={data.id} /></div>
                <div className='UsersupInp'><p>小事名字:</p><input type='text' placeholder={data.name} /></div>
                <div className='UsersupInp'><p>小事时间:</p><input type='number' placeholder={data.time} /></div>
                <div className='UsersupInp'><p>小事图片路径:</p><input type='text' placeholder={data.imgpath} /></div>
                <div className='UsersupInp'><p>小事完成状态:</p><input type='text' placeholder={data.state==0?'未完成':'已完成'} /></div>
                <div className='UsersupInp'><p>地点:</p><input type="text" placeholder={data.place} /></div>
                <div className='UsersupInp'><p>小事描述:</p><textarea rows='4' placeholder={data.describe} /></div>
                <div className='UsersupB'><input type='submit' /></div>
                <div className='UsersupB'><input type='button' value='取消'
                  onClick={() => {
                    props.history.push('/home/little');
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
  littlelist: state.littlelist,
})

export default connect(mapStateToProps)(withRouter(LittleChange));