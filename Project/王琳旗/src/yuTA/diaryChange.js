import React, { useEffect } from 'react'
import './usersUp.css'
import getDiary from '../GetData/getDiary'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';


const DiaryChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      {
        props.diarylist.map((data, index) => {
          if (data.id == props.location.id) {
            return (
              <div className='Usersupmain' key={index}>
                <div className='UsersupInp'><p>日记编号:</p><input type='number' placeholder={data.id} /></div>
                <div className='UsersupInp'><p>日记内容:</p><textarea rows='4' placeholder={data.content} /></div>
                <div className='UsersupInp'><p>日记图片路径:</p><input type='text' placeholder={data.imgpath} /></div>
                <div className='UsersupInp'><p>日记视频路径:</p><input type='text' placeholder={data.videopath} /></div>
                <div className='UsersupInp'><p>日记时间:</p><input type='number' placeholder={data.time} /></div>
                <div className='UsersupInp'><p>日记创作者:</p><input type="text" placeholder={data.uid} /></div>
                <div className='UsersupB'><input type='submit' /></div>
                <div className='UsersupB'><input type='button' value='取消'
                  onClick={() => {
                    props.history.push('/home/diary');
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
  diarylist: state.diarylist,
})

export default connect(mapStateToProps)(withRouter(DiaryChange));