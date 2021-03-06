import React from 'react'
import { Component } from 'react';
import './usersUp.css'

class CommentUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/comment', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    await this.props.history.push('/home/comment')
    await this.props.history.go(0)
  }
  AddId = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  AddUid = (e) => {
    this.setState({
      uid: e.target.value
    })
  }
  AddContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  AddTime = (e) => {
    this.setState({
      time: e.target.value
    })
  }
  render() {
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
          <div className='UsersupInp'>
            <p>评论编号:</p>
            <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入评论编号' />
          </div>
          <div className='UsersupInp'>
            <p>评论内容:</p>
            <input type='text' value={this.state.content} onChange={this.AddContent} placeholder='请输入评论内容' />
          </div>
          <div className='UsersupInp'>
            <p>评论时间:</p>
            <input type='datetime' value={this.state.time} onChange={this.AddTime}  placeholder='请输入评论时间' />
          </div>
          <div className='UsersupInp'>
            <p>评论创作者:</p>
            <input type="number" value={this.state.uid} onChange={this.AddUid}  placeholder="请输入评论创作者" />
          </div>
          <div className='UsersupB'><input type='submit' /></div>
          <div className='UsersupB'><input type='button' value='取消'
            onClick={() => {
              this.props.history.push('/home/comment');
            }} /></div>
        </form>
      </div>

    )
  }
}

export default CommentUp;