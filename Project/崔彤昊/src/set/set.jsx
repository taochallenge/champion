import React, { Component } from 'react';
import './set.css';

export default class Set extends Component {

    render() {

        return (
            <div className="set-all">
                <div className="ret" onClick={()=>this.props.history.push('/mine')}></div>
                <div className="set-1">
                    <button className="account">账号</button>
                    <button className="about">关于</button>
                    <button className="privacy">隐私政策</button>
                </div>
            </div>
        );
    }
}



