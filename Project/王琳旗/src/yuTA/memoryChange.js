import React from 'react'
import './usersUp.css'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

const MemoryChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      {
        props.memorylist.map((data, index) => {
          if (data.id == props.location.id) {
            return (
              <div className='Usersupmain' key={index}>
                <div className='UsersupInp'><p>纪念日编号:</p><input type='number' placeholder={data.id} /></div>
                <div className='UsersupInp'><p>纪念日名字:</p><input type='text' placeholder={data.name} /></div>
                <div className='UsersupInp'><p>纪念日时间:</p><input type='number' placeholder={data.time} /></div>
                <div className='UsersupInp'><p>纪念日倒计时:</p><input type='text' placeholder={data.countdown} /></div>
                <div className='UsersupB'><input type='submit' /></div>
                <div className='UsersupB'><input type='button' value='取消'
                  onClick={() => {
                    props.history.push('/home/memory');
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
  memorylist: state.memorylist,
})

export default connect(mapStateToProps)(withRouter(MemoryChange));