import React from 'react'
import { Component } from 'react';
import './usersUp.css'
import { ImagePicker } from 'antd-mobile'
import { timers } from 'jquery';
const data = []
class UsersUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: data
    };
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/user', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify({
        url:this.state.url,
        filename:this.state.filename,
        myname:this.state.myname,
        sex:this.state.sex,
        birthday:this.state.birthday,
        secret:this.state.secret,
        tel:this.state.tel,
        password:this.state.password
      })
    })
    await this.props.history.push('/home/users')
    await this.props.history.go(0)
  }
  AddSex = (e) => {
    this.setState({
      sex: e.target.value
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
  onChange = (files, type, index) => {
    console.log(files, type, index);
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    this.setState({
        files,
        url: files[0].url,
        filename: '' + year + month + day + hour + minute + second + '.jpg'
    });
};
  render() {
    const { files } = this.state;
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
          <div className='UsersupInp'>
            <p>用户头像:</p>
            <ImagePicker className='pho'
              files={files}
              onChange={this.onChange}
              selectable={files.length < 1}
              disableDelete={true}
              style={{ width: '100%' }}
            />
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
