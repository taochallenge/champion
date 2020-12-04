import React, { Component } from 'react';
import './mine.css';

export default class Mine extends Component {

    render() {

        return (
            <div className="my">
                <div className="retu" onClick={()=>this.props.history.push('/shouye')}></div>
                <div className="we">
                    <button className="weme" onClick={()=>this.props.history.push('/mineinfor')}>我们的信息</button>
                    <button className="service">客服中心</button>
                    <button className="set" onClick={()=>this.props.history.push('/set')}>设置</button>
                </div>
            </div>
        );
    }
}



