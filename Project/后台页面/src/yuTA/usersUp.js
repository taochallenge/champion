import React from 'react'
import { Component } from 'react';
import './usersUp.css'

class UsersUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/user', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    await this.props.history.push('/home/users')
    await this.props.history.go(0)
  }
  AddSex = (e) => {
    this.setState({
      sex: e.target.value
    })
  }
  AddId = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  AddImgpath = (e) => {
    this.setState({
      imgpath: e.target.value
    })
  }
  AddHerid = (e) => {
    this.setState({
      herid: e.target.value
    })
  }
  AddPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  AddMyname = (e) => {
    this.setState({
      myname: e.target.value
    })
  }
  AddBirthday = (e) => {
    this.setState({
      birthday: e.target.value
    })
  }
  AddLovedata = (e) => {
    this.setState({
      lovedata: e.target.value
    })
  }

  AddSecret = (e) => {
    this.setState({
      secret: e.target.value
    })
  }
  AddTel = (e) => {
    this.setState({
      tel: e.target.value
    })
  }
  render() {
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
          <div className='UsersupInp'>
            <p>用户编号:</p>
            <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入用户编号' />
          </div>
          <div className='UsersupInp'>
            <p>用户头像:</p>
            <input type='text' value={this.state.imgpath} onChange={this.AddImgpath} placeholder='请输入用户头像' />
          </div>
          <div className='UsersupInp'>
            <p>另一半编号:</p>
            <input type='number' value={this.state.herid} onChange={this.AddHerid} placeholder='请输入另一半编号' />
          </div>
          <div className='UsersupInp'>
            <p>用户昵称:</p>
            <input type='text' val={this.state.myname} onChange={this.AddMyname} placeholder='请输入用户昵称' />
          </div>
          <div className='UsersupInp'>
            <p>用户性别:</p>
            <input type='text' value={this.state.sex} onChange={this.AddSex} placeholder='请输入用户性别' />
          </div>
          <div className='UsersupInp'>
            <p>用户生日:</p>
            <input type='date' value={this.state.birthday} onChange={this.AddBirthday} placeholder='请输入用户生日' />
          </div>
          <div className='UsersupInp'>
            <p>相恋日期:</p>
            <input type='date' value={this.state.lovedata} onChange={this.AddLovedata} placeholder='请输入相恋日期' />
          </div>
          <div className='UsersupInp'>
            <p>配对码:</p>
            <input type='text' value={this.state.secret} onChange={this.AddSecret} placeholder='请输入配对码' />
          </div>
          <div className='UsersupInp'>
            <p>用户电话:</p>
            <input type='tel' value={this.state.tel} onChange={this.AddTel} placeholder='请输入用户电话' />
          </div>
          <div className='UsersupInp'>
            <p>用户密码:</p>
            <input type='password' value={this.state.password} onChange={this.AddPassword} placeholder='请输入用户密码' />
          </div>
          <div className='UsersupB'><input type='submit' /></div>
          <div className='UsersupB'><input type='button' value='取消'
            onClick={() => {
              this.props.history.push('/home/users');
            }} /></div>
        </form>
      </div>

    )
  }
}

export default UsersUp;
