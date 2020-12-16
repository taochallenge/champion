import React, { Component } from 'react'
import { NavBar, Icon, ImagePicker } from 'antd-mobile';
import img1 from './imgs/camera.png';

const data = [];
export class Couple extends Component {

  state = {
    files: data,
    multiple: false,
    describe:this.props.location.describe,
    filename:'',
    time:'',
    place:'',
    url:''
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    this.setState({
      files,
      url:files[0].url,
      filename:''+year+month+day+hour+minute+second+'.jpg'
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
  changeDescribe = (e) =>{
    this.setState({
      describe:e.target.value
    })
  }
  changeDate = (e) => {
    this.setState({
      time:e.target.value
    })
  }
  changePlace = (e) => {
    this.setState({
      place:e.target.value
    })
  }
  confirm = async() =>{
    fetch('http://www.cgwzz.top:1234/uploadimg',{
        method:'POST',
        body:JSON.stringify({
            url:this.state.url,
            filename:this.state.filename,
            describe:this.state.describe,
            time:this.state.time,
            place:this.state.place,
            littleid:this.props.location.id,
            id:localStorage['id'],
            herid:localStorage['herid'],
            state:true
        })
    }).then(res=>res.json())
    .then(res=>this.props.history.push('/little'))
    await this.props.history.push('/little')
  }
  render() {
    const { files } = this.state;
    console.log(this.state);
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
          <input type='text' value={this.state.describe} onChange={this.changeDescribe} style={{ width: '80%', height: '20px', backgroundColor: '#8f8f8850', borderRadius: '5px', marginLeft: '25px', marginTop: '10px' }}>
          </input>
        </div>

        <div className='four'>任务完成时间</div>
        <input type='date' onChange={this.changeDate} style={{ width: '81%', height: '25px', backgroundColor: '#8f8f8850', borderRadius: '5px', marginLeft: '25px', marginTop: '10px' }}></input>
        <div className='five'>任务完成地点</div>
        <input type='text' onChange={this.changePlace} placeholder='最多10个字' style={{ width: '80%', height: '20px', backgroundColor: '#8f8f8850', borderRadius: '5px', marginLeft: '25px', marginTop: '10px' }}></input>
        <div className='confirm' onClick={this.confirm}>确认填写</div>
      </div>
    )
  }
}
export default Couple;
