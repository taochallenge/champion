import React from 'react'
import { Component } from 'react';
import './usersUp.css'

class MemoryUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/memory', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    await this.props.history.push('/home/memory')
    await this.props.history.go(0)
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
  AddCountdown = (e) => {
    this.setState({
      countdown: e.target.value
    })
  }
  render() {
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
        <div className='UsersupInp'>
          <p>纪念日编号:</p>
          <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入纪念日编号' />
        </div>
        <div className='UsersupInp'>
          <p>纪念日名字:</p>
          <input type='text' value={this.state.name} onChange={this.AddName} placeholder='请输入纪念日名字' />
        </div>
        <div className='UsersupInp'>
          <p>纪念日时间:</p>
          <input type='date' value={this.state.time} onChange={this.AddTime} placeholder='请输入纪念日时间' />
        </div>
        <div className='UsersupInp'>
          <p>纪念日倒计时:</p>
          <input type='text' value={this.state.countdown} onChange={this.AddCountdown} placeholder='请输入纪念日倒计时' />
        </div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            this.props.history.push('/home/memory');
          }} /></div>
        </form>
      </div>

    )
  }
}

export default MemoryUp;