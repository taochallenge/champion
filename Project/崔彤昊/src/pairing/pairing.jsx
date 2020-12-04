import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import './pairing.css';
import qq from '../img/qq.png';
import weixin from '../img/weixin.png';
import email from '../img/email.png';

export default class Pairing extends Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: "" };
    }

    handleClick() {
        let code = '';
        for (var i = 1; i <= 6; i++) {
            const num = Math.floor(Math.random() * 10);
            code += num;
        }
        this.setState({ random: code });
    }

    render() {
        return (
            <div className="con">
                <h2 className="attention">绑定另一半后体验全部情侣功能</h2>
                <div className="cont-1">
                    <div className="txt-1">你的配对码</div>
                    <div>
                        <div className="code"> {this.state.random}</div>
                        <button className="btn-1" onClick={this.handleClick.bind(this)}>获取</button>
                    </div>
                    <div className="img-1">
                        <div className="img-2"><img src={qq} alt=""/> <div className="txt-2">QQ邀请</div></div>
                        <div className="img-2"><img src={weixin} alt=""/><div className="txt-2">qq邀请</div></div>
                        <div className="img-2"><img src={email} alt=""/><div className="txt-2">短信邀请</div></div>
                    </div>
                    <div className="line"></div>
                    <div className="txt-3">TA已注册，填写TA的配对码</div>
                    <div className="recode">
                        <input className="ver" placeholder="请输入TA的配对码"></input>
                        <button className="but" onClick={()=>this.props.history.push('/message')}>绑定</button>
                    </div>
                </div>
            </div>
        )
    }
}

