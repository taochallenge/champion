import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import img1 from './images/picture.png';
import img2 from './images/add.png';
import img3 from './images/like.png';
import {getLittle} from './actionCreators'
import { withRouter } from 'react-router-dom';

class Lunbo extends React.Component {
   
  componentDidMount() {
    // simulate img loading
    
    this.props.dispatch(getLittle());


  }
  render() {
    return (

      <Carousel
        infinite
        dots={false}
        style={{ touchAction: 'pan-y' }}
      >
        {
          this.props.little.map(val => (

            <div
              key = {val}
              style={{ verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            >
              <div className='qingdan'>
                <div className='img'>
                  <img src={img1} alt='' style={{ width: '30%', marginTop: '25%' }}></img>
                  <div className='record'>用一张照片记录你们的甜蜜</div>
                </div>
                <div className='task' onClick={()=>this.props.history.push({
                  pathname:'/couple',
                  title:val.name,
                  describe:val.describe
                })}>
                <img src={img2} alt='' style={{ width: '70%', marginTop: '15%' }}></img>
                </div>
                <div className='thing'>{val.name}</div>
                <div className='describe' >{val.describe}</div>
                <div className='like'><img src={img3} alt='' style={{ width: '10%', marginTop: '15%' }}></img></div>

              </div>
              <div className='hidden'>隐藏恋爱任务</div>

            </div>


          ))
        }

      </Carousel>
    );
  }
}
const mapStateToProps = (state) => ({ 
  little: state.little
})
export default connect(mapStateToProps)(withRouter(Lunbo));