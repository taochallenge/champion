import React from 'react'
import './usersUp.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const CentenceChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      {
        props.centencelist.map((data, index) => {
          if (data.id == props.location.id) {
            return (
              <div className='Usersupmain' key={index}>
                <div className='UsersupInp'><p>句子编号:</p><input type='number' placeholder={data.id} /></div>
                <div className='UsersupInp'><p>句子内容:</p><textarea rows='4' placeholder={data.content} /></div>
                <div className='UsersupInp'><p>句子时间:</p><input type='number' placeholder={data.time} /></div>
                <div className='UsersupInp'><p>句子是否被收藏:</p><input type='text' placeholder={data.collect == 1 ? '已收藏' : '未收藏'} /></div>
                <div className='UsersupInp'><p>句子标题:</p><input type='text' placeholder={data.title} /></div>
                <div className='UsersupInp'><p>句子英文标题:</p><input type="text" placeholder={data.titleenglish} /></div>
                <div className='UsersupB'><input type='submit' /></div>
                <div className='UsersupB'><input type='button' value='取消'
                  onClick={() => {
                    props.history.push('/home/centence');
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
  centencelist: state.centencelist,
})

export default connect(mapStateToProps)(withRouter(CentenceChange));