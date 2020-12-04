import React, { Component } from 'react'
import { Picker, List } from 'antd-mobile';
import './Click.css'

const CustomChildren = props => (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
      <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
        <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
        <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
      </div>
    </div>
  );

const nums = [
    {
        label:
        (<div>
            <span>不重复</span>
        </div>),
        value: '1',
    },
    {
        label:
        (<div>
            <span>每周重复</span>
        </div>),
        value: '2',
        },
    {
        label:
        (<div>
            <span>每月重复</span>
        </div>),
        value: '3',
    },
    {
        label:
        (<div>
          <span>每年重复</span>
        </div>),
        value: '4',
    },
];
  
class Click extends Component {
    state = {
        data: [],
        cols: 1,
        numValue: 1,
      };

    onChangeNum = (num) => {
        this.setState({
          numValue: num,
        });
      };
    render() {
        return (
            <div>
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                    <Picker
                        data={nums}
                        value={this.state.numValue}
                        cols={1}
                        onChange={this.onChangeNum}
                    >
                        <List.Item arrow="horizontal">
                            <img src={require('./imgs/click.png')} id='click-one'/>
                            <p id='click-two'>重复提醒</p>
                        </List.Item>
                    </Picker>
                </List>   
            </div>
        )
    }
}

export default Click
