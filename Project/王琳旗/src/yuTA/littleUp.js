import React from 'react'
import { Component } from 'react';
import './usersUp.css'

class LittleUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = (e) => {
    e.preventDefault();
    fetch('/little', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    this.props.history.push('/home/little')
  }
  AddName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  AddId = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  AddTime = (e) => {
    this.setState({
      time: e.target.value
    })
  }
  AddImgpath = (e) => {
    this.setState({
      imgpath: e.target.value
    })
  }
  AddState = (e) => {
    this.setState({
      state: e.target.value
    })
  }
  AddPlace = (e) => {
    this.setState({
      place: e.target.value
    })
  }
  AddDescribe = (e) => {
    this.setState({
      describe: e.target.value
    })
  }
  render() {
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
        <div className='UsersupInp'>
          <p>小事编号:</p>
          <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入小事编号' />
        </div>
        <div className='UsersupInp'>
          <p>小事名字:</p>
          <input type='text' value={this.state.name} onChange={this.AddName} placeholder='请输入小事名字' />
        </div>
        <div className='UsersupInp'>
          <p>小事时间:</p>
          <input type='date' value={this.state.time} onChange={this.AddTime} placeholder='请输入小事时间' />
        </div>
        <div className='UsersupInp'>
          <p>小事图片路径:</p>
          <input type='text' value={this.state.imgpath} onChange={this.AddImgpath} placeholder='请输入小事图片路径' />
        </div>
        <div className='UsersupInp'>
          <p>小事完成状态:</p>
          <input type='text' value={this.state.state} onChange={this.AddState} placeholder='请输入小时完成状态' />
        </div>
        <div className='UsersupInp'>
          <p>地点:</p>
          <input type="text" value={this.state.place} onChange={this.AddPlace} placeholder="请输入地点" />
        </div>
        <div className='UsersupInp'>
          <p>小事描述:</p>
          <textarea rows='4' value={this.state.describe} onChange={this.AddDescribe} placeholder="请输入小事描述" />
        </div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            this.props.history.push('/home/little');
          }} /></div>
        </form>
      </div>

    )
  }
}

export default LittleUp;