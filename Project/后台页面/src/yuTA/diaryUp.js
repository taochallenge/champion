import React from 'react'
import {Component} from 'react'
import './usersUp.css'

class DiaryUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/diaries', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    await this.props.history.push('/home/diary')
    await this.props.history.go(0)
  }
  AddContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  // AddImgpath = (e) => {
  //   this.setState({
  //     imgpath: e.target.value
  //   })
  // }
  // AddVideopath = (e) => {
  //   this.setState({
  //     videopath: e.target.value
  //   })
  // }
  AddTime = (e) => {
    this.setState({
      time: e.target.value
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
            <p>日记编号:</p>
            <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入日记编号' />
          </div>
          <div className='UsersupInp'>
            <p>日记内容:</p>
            <textarea rows='4' value={this.state.content} onChange={this.AddContent} placeholder='请输入日记内容' />
          </div>
          {/* <div className='UsersupInp'>
            <p>日记图片路径:</p>
            <input type='text' value={this.state.imgpath} onChange={this.AddImgpath} placeholder='请输入日记图片路径' />
          </div>
          <div className='UsersupInp'>
            <p>日记视频路径:</p>
            <input type='text' value={this.state.videopath} onChange={this.AddVideopath} placeholder='请输入日记视频路径' />
          </div> */}
          <div className='UsersupInp'>
            <p>日记时间:</p>
            <input type='datetime' value={this.state.time} onChange={this.AddTime} placeholder='请输入日记时间' />
          </div>
          <div className='UsersupInp'>
            <p>日记创作者:</p>
            <input type="text" value={this.state.uid} onChange={this.AddUid} placeholder="请输入日记创作者" />
          </div>
          <div className='UsersupB'><input type='submit' /></div>
          <div className='UsersupB'><input type='button' value='取消'
            onClick={() => {
              this.props.history.push('/home/diary');
            }} /></div>
        </form>
      </div>

    )
  }
}
export default DiaryUp;