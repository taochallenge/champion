import React from 'react'
import Mytab from './Mytab'
import './Home.css'

const Home = () => {
  return (
    <div className='yuta'>
      <div className='wrap'>
        <div id='nav'>每&nbsp;日一&nbsp;句</div>
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
          <img src={require('./imgs/jinianri.png')}/>
          <p>纪念日</p>
        </div>

        <div id='things'>
          <img src={require('./imgs/book.png')}/>
          <p>100件小事</p>
        </div>
      </div>
      <Mytab/>
    </div>
  )
}

export default Home


