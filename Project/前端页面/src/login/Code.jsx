import React, { Component } from 'react';
import './css/code.css';

export default class Code extends Component {

    exit = () => {
        localStorage.clear()
        this.props.history.push('/enter')
    }
    relieve = () => {
        localStorage.clear()
        fetch('/clearher',{
            method:'POST',
            body:JSON.stringify({
                id:localStorage['id']
            })
        })
        this.props.history.push('/enter')
    }
    render() {

        return (
            <div className="cus-all">
                <div className="custitle">
                    <div className="ter" onClick={() => this.props.history.push('/set')}></div>账号
                </div>
                <div className="code01">
                    <button className="codeout" onClick={()=>this.props.history.push('/chancode')}>更改密码</button>
                    <button className="codeout" onClick={this.exit}>退出登录</button>
                    <button className="codeout" onClick={this.relieve}>解除关系</button>
                   
                </div>
            </div>
        );
    }
}



