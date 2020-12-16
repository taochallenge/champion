import React, { Component } from 'react';
import './css/set.css';

export default class Set extends Component {

    render() {

        return (
            <div className="set-all">
                <div className="ret" onClick={()=>this.props.history.push('/mine')}></div>
                <div className="set-1">
                    <button className="account" onClick={()=>this.props.history.push('/Code')}>账号</button>
                    <button className="about" onClick={()=>this.props.history.push('/question')}>关于</button>
                    <button className="privacy"  onClick={()=>this.props.history.push('/privacy')}>隐私政策</button>
                </div>
            </div>
        );
    }
}



