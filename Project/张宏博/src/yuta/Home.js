import React, { Component } from 'react'
import Mytab from './Mytab'
import Jinian from './Daywords'
import './Home.css'
import Daywords from './Daywords';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleClickBtn = this.handleClickBtn.bind(this);
  }
  handleClickBtn(){
    this.props.history.push('/daywords');
  }
  
  render(){
    return (
    <div className='yuta'>
      <div className='wrap'>
        <Daywords/>
        <div id='diary'>
          <img src={require('./imgs/riji.png')}/>
          <p>写日记</p>
        </div>

        <div id='talk'>
          <img src={require('./imgs/liaotian.png')}/>
          <p>悄悄话</p>
        </div>

        <div id='sweet'>
          <img src={require('./imgs/rili.png')}/>
          <p>1314打卡</p>
        </div>

        <div id='commemorate'>
          <img src={require('./imgs/jinianri.png')} onClick={() => {
            this.props.history.push('/Jinian');
          }}       />
          <p>纪念日</p>
        </div>

        <div id='things'>
          <img src={require('./imgs/book.png')}/>
          <p>100小事</p>
        </div>
      </div>
      <Mytab/>
    </div>
    )
  }
}

export default Home


