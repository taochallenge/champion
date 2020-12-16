import React from 'react'
import {Component} from 'react'
import './usersUp.css'

class TreeUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/tree', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    await this.props.history.push('/home/tree')
    await this.props.history.go(0)
  }
  AddContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  AddImgpath = (e) => {
    this.setState({
      imgpath: e.target.value
    })
  }
  AddCountday = (e) => {
    this.setState({
      countday: e.target.value
    })
  }
  AddUid = (e) => {
    this.setState({
      uid: e.target.value
    })
  }
  render() {
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
        <div className='UsersupInp'>
          <p>种树编号:</p>
          <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入种树编号' />
        </div>
        <div className='UsersupInp'>
          <p>种树内容:</p>
          <textarea rows='4' value={this.state.content} onChange={this.AddContent} placeholder='请输入种树内容' />
        </div>
        <div className='UsersupInp'>
          <p>种树图片路径:</p>
          <input type='text' value={this.state.imgpath} onChange={this.AddImgpath} placeholder='请输入种树图片路径' />
        </div>
        <div className='UsersupInp'>
          <p>相恋天数:</p>
          <input type='number' value={this.state.countday} onChange={this.AddCountday} placeholder='请输入相恋天数' />
        </div>
        <div className='UsersupInp'>
          <p>种树创作者:</p>
          <input type='text' value={this.state.uid} onChange={this.AddUid} placeholder='请输入种树创作者' />
        </div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            this.props.history.push('/home/tree');
          }} /></div>
        </form>
      </div>

    )
  }
}

export default TreeUp;