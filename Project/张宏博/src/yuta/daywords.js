import { Popover, NavBar, Icon } from 'antd-mobile';
import React from 'react'
import './Daywords.css'

// const Item = Popover.Item;

class Daywords extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onClick = () => {
    this.setState({
      visible: false
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (
      <div>
        <Popover mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          visible={this.state.visible}
          overlay={[
            <div className='text'>
              <div id='txt'></div>
              <div id='one'>
                <img src={require('./imgs/share.png')} />
                <p>分享</p>
              </div>
              <div id='two'>
                <img src={require('./imgs/like.png')} />
                <p>收藏</p>
              </div>
              <div id='three'>
                <img src={require('./imgs/list.png')} />
                <p>收藏列表</p>
              </div>
            </div>
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-15, 40]
          }}
          onVisibleChange={this.handleVisibleChange}
        >
          <div id='nav' onClick={this.handleClickBtn}>每&nbsp;日一&nbsp;句</div>
        </Popover>
      </div>
    );
  }
}

export default Daywords