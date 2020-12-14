import React from 'react'
import { Component } from 'react';
import './usersUp.css'

class PunchUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/punch', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    await this.props.history.push('/home/punch')
    await this.props.history.go(0)
  }
  AddTime = (e) => {
    this.setState({
      time: e.target.value
    })
  }
  AddId = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  AddCount = (e) => {
    this.setState({
      count: e.target.value
    })
  }
  render() {
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
            <div className='UsersupInp'>
              <p>打卡人编号:</p>
              <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入打卡人编号' />
            </div>
            <div className='UsersupInp'>
              <p>打卡人时间:</p>
              <input type='date' value={this.state.time} onChange={this.AddTime} placeholder='请输入打卡人时间' />
            </div>
            <div className='UsersupInp'>
              <p>打卡人总天数:</p>
              <input type='number' value={this.state.count} onChange={this.AddCount} placeholder='请输入打卡人总天数' />
            </div>
            <div className='UsersupB'><input type='submit' /></div>
            <div className='UsersupB'><input type='button' value='取消'
              onClick={() => {
                this.props.history.push('/home/punch');
              }} /></div>
        </form>
      </div>

    )
  }
}

export default PunchUp;