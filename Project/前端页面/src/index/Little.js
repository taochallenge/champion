import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import { NavBar, Icon, Carousel } from 'antd-mobile';
import { connect } from 'react-redux';
import img1 from './imgs/picture.png';
import img2 from './imgs/add.png';
import img3 from './imgs/like.png';
import img4 from './imgs/right.png';
import {getLittle} from './actionCreators'
import { withRouter } from 'react-router-dom';

class Little extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      count:0
    }
  }
  componentDidMount() {
      // simulate img loading
      
      this.props.dispatch(getLittle(localStorage['id']))
      this.setState({count:this.state.count++})
  
    }
  render() {
    return (
      <div>
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.push('/home')}
            rightContent={[
              <Icon key="1" type="ellipsis" />,
            ]}
          >恋人清单</NavBar>
        </div>
        <Carousel
        infinite
        dots={false}
        style={{ touchAction: 'pan-y' }}
      >
        {
          this.props.little.map((val) => (

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
                  {
                    val.state ? 
                    
                    <img src={val.imgpath} alt='' style={{ width: '100%' ,height:'100%'}}></img>
                    :
                    <div>
                    <img src={img1} alt='' style={{ width: '30%', marginTop: '25%' }}></img>
                    <div className='record'>用一张照片记录你们的甜蜜</div>
                    </div>
                  }
                </div>
                <div className='task' onClick={()=>this.props.history.push({
                  pathname:'/couple',
                  id:val.id,
                  title:val.name,
                  describe:val.describe
                })}>
                  {
                    val.state
                    ? <img src={img4} alt='' style={{ width: '70%', marginTop: '15%' }}></img>
                    : <img src={img2} alt='' style={{ width: '70%', marginTop: '15%' }}></img>
                  }
                
                </div>
                <div className='thing'>{val.name}</div>
                <div className='describe' >{val.describe}</div>
                <div className='little-time'>{val.time}&nbsp;&nbsp;{val.place}</div>
                <div className='like'></div>
                <img src={img3} alt='' id='xin'></img>
              </div>
              <div className='hidden'>隐藏恋爱任务</div>

            </div>


          ))
        }

      </Carousel>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ 
  little: state.little
})
export default connect(mapStateToProps)(Little);