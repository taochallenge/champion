import React, { Component } from 'react';
import './css/cus.css';

export default class Cus extends Component {

    render() {

        return (
            <div className="cus-all">

                <div className="custitle">
                    <div className="ter" onClick={() => this.props.history.push('/mine')}></div>客服中心
                </div>
                <div className="kefu">
                    <div>客服咨询电话：12345678987</div>
                </div>
                <div className="kefu">
                    <button className="goba" onClick={() => this.props.history.push('/goback')}>意见反馈</button>
                </div>
            </div>
        );
    }
}



