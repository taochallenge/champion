import React, { Component } from 'react';
import './css/goback.css';

export default class Goback extends Component {

    render() {

        return (
            <div className="go-all">
                <div className="custitle">
                    <div className="ter" onClick={() => this.props.history.push('/mine')}></div>意见反馈
                </div>
                <div className="backal">
                    <div className="ber"><input className="goone" placeholder="输入您的联系方式"></input></div>
                    <div className="ber1"> <textarea className="gotwo" placeholder="输入您要反馈的内容" ></textarea></div>
                </div>
                <div className="subto">
                    <button className="submitgobtn">提交</button>
                </div>
            </div>
        );
    }
}



