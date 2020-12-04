import React, { Component } from 'react'
import { NavBar, Icon, ImagePicker } from 'antd-mobile';
import img1 from './images/camera.png';

const data = [];
export class Couple extends Component {

  state = {
    files: data,
    multiple: false,
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  };
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }
  onTabChange = (key) => {
    console.log(key);
  };
  render() {
    const { files } = this.state;
    return (

      <div className='couple'>
        <div >
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.goBack()}
            rightContent={[
              <Icon key="1" type="ellipsis" />,
            ]}
          ><div className='one'>{this.props.location.title}</div></NavBar>
        </div>
        <div className='one'>恋爱任务:{this.props.location.title}</div>
        <div className='two'>用一张图记录你们的甜蜜</div>
        <div className='camera'>
            <ImagePicker className='picker'
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 1}
              multiple={this.state.multiple}
              capture={false}
            />
            <div className='upload'>点击上传图片</div>
        </div>
        
        <div className='three'>用一句话分享你现在的心情</div>
        <div className='int'>
          <input type='text' value={this.props.location.describe} style={{ width: '80%', height: '20px', backgroundColor: '#8f8f8850', borderRadius: '5px', marginLeft: '25px', marginTop: '10px' }}>
          </input>
        </div>

        <div className='four'>任务完成时间</div>
        <input type='date' style={{ width: '81%', height: '25px', backgroundColor: '#8f8f8850', borderRadius: '5px', marginLeft: '25px', marginTop: '10px' }}></input>
        <div className='five'>任务完成地点</div>
        <input type='text' placeholder='最多10个字' style={{ width: '80%', height: '20px', backgroundColor: '#8f8f8850', borderRadius: '5px', marginLeft: '25px', marginTop: '10px' }}></input>
        <div className='confirm'>确认填写</div>
      </div>
    )
  }
}
export default Couple;
