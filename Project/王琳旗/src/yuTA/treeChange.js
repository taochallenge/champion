import React from 'react'
import './usersUp.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const TreeChange = (props) => {
  return (
    <div id='UsersupDiv'>
      <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
      {
        props.treelist.map((data, index) => {
          if (data.id == props.location.id) {
            return (
              <div className='Usersupmain' key={index}>
                <div className='UsersupInp'><p>种树编号:</p><input type='number' placeholder={data.id} /></div>
                <div className='UsersupInp'><p>种树内容:</p><textarea rows='4' placeholder={data.content} /></div>
                <div className='UsersupInp'><p>种树图片路径:</p><input type='text' placeholder={data.imgpath} /></div>
                <div className='UsersupInp'><p>相恋天数:</p><input type='number' placeholder={data.countday} /></div>
                <div className='UsersupInp'><p>羡慕人数:</p><input type='number' placeholder={data.countadmire} /></div>
                <div className='UsersupInp'><p>是否被收藏:</p><input type="text" placeholder={data.collect == 1 ? '已收藏' : '未收藏'} /></div>
                <div className='UsersupInp'><p>种树创作者:</p><input type='text' placeholder={data.uid} /></div>
                <div className='UsersupB'><input type='submit' /></div>
                <div className='UsersupB'><input type='button' value='取消'
                  onClick={() => {
                    props.history.push('/home/tree');
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
  treelist: state.treelist,
})

export default connect(mapStateToProps)(withRouter(TreeChange));