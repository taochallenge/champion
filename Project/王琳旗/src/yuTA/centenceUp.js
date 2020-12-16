import React from 'react'
import {Component} from 'react'
import './usersUp.css'

class CentenceUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  AddSubmit = async (e) => {
    e.preventDefault();
    await fetch('/centence', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain'
      },
      body: JSON.stringify(this.state)
    })
    await this.props.history.push('/home/centence')
    await this.props.history.go(0)
  }
  AddContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  AddId = (e) =>{
    this.setState({
      id: e.target.value
    })
  }
  AddCollect = (e) => {
    this.setState({
      collect: e.target.value
    })
  }
  AddTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  AddTime = (e) => {
    this.setState({
      time: e.target.value
    })
  }
  AddTitleenglish = (e) => {
    this.setState({
      titleenglish: e.target.value
    })
  }
  render() {
    return (
      <div id='UsersupDiv'>
        <div className='Usersuphead'><p>遇TA后台管理系统</p></div>
        <form onSubmit={this.AddSubmit} className='Usersupmain'>
        <div className='UsersupInp'>
          <p>句子编号:</p>
          <input type='number' value={this.state.id} onChange={this.AddId} placeholder='请输入句子编号' />
          </div>
        <div className='UsersupInp'>
          <p>句子内容:</p>
          <textarea rows='4' value={this.state.content} onChange={this.AddContent} placeholder='请输入句子内容' />
        </div>
        <div className='UsersupInp'>
          <p>句子时间:</p>
          <input type='date' value={this.state.time} onChange={this.AddTime} placeholder='请输入句子时间' />
        </div>
        <div className='UsersupInp'>
          <p>句子是否被收藏:</p>
          <input type='text' value={this.state.collect} onChange={this.AddCollect} placeholder='请输入句子是否被收藏' />
        </div>
        <div className='UsersupInp'>
          <p>句子标题:</p>
          <input type='text' value={this.state.title} onChange={this.AddTitle} placeholder='请输入句子标题' />
        </div>
        <div className='UsersupInp'>
          <p>句子英文标题:</p>
          <input type="text" value={this.state.titleenglish} onChange={this.AddTitleenglish} placeholder="请输入句子英文标题" />
        </div>
        <div className='UsersupB'><input type='submit' /></div>
        <div className='UsersupB'><input type='button' value='取消'
          onClick={() => {
            this.props.history.push('/home/centence');
          }} /></div>
        </form>
      </div>

    )
  }
}

export default CentenceUp;