import React, { Component } from 'react'
import Mytab from './Mytab'
import './css/Home.css'
import Daywords from './Daywords';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
 
  render(){
    return (
    <div>
      <div class="home-wrap">
        <Daywords/>
        <div id='love'>
          {/* <p>我们已经相爱</p> */}
        </div>
        
        <div id='diary'>
          <img 
            src={require('./imgs/riji.png')} 
            onClick={() => this.props.history.push('/riji')}
          />
          <p>写日记</p>
        </div>

        <div id='talk'>
          <img 

            src={require('./imgs/liaotian.png')}
            onClick={() => this.props.history.push('/photo')}

            src={require('./imgs/liaotian.png')}   

          />
          <p>时光相册</p>
        </div>

        <div id='sweet'>
          <img 
            src={require('./imgs/rili.png')}
            onClick={() => this.props.history.push('/punch')}
          />
          <p>1314打卡</p>
        </div>

        <div id='commemorate'>
          <img src={require('./imgs/jinianri.png')} onClick={() => {
            this.props.history.push('/jinian');
          }} />
          <p>纪念日</p>
        </div>

        <div id='things'>
          <img 
            src={require('./imgs/book.png')}
            onClick={() => this.props.history.push('/little')}
          />
          <p>100小事</p>
        </div>
      <Mytab/>
      </div>
    </div>
    )
  }
}

export default Home


