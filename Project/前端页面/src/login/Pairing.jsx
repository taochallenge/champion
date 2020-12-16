import React, { Component } from 'react';
import './css/pairing.css';
import qq from './img/qq.png';
import weixin from './img/weixin.png';
import email from './img/email.png';

export default class Pairing extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            secret: localStorage['secret'],
            hersecret:''
        }
    }

    setHersecret = (e) => {
        this.setState({
            hersecret: e.target.value
        })
    }
    setHerid = (herid,hername,herbirthday,herimgpath) => {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let lovedate = year + '-' + month + '-' + day
        fetch('/setherid',{
            method:'POST',
            body:JSON.stringify({
                id:localStorage['id'],
                herid:herid,
                hername:hername,
                herbirthday:herbirthday,
                lovedata:lovedate,
                imgpath:herimgpath
            })
        })
    }
    findSecret = () => {
        if(this.state.hersecret){
            fetch('/getsecret/' + this.state.hersecret)
            .then(res => res.json())
            .then(d => {
                if (d.length!=0) {
                    
                    localStorage['herid']=d[0].id
                    this.setHerid(d[0].id,d[0].myname,d[0].birthday,d[0].imgpath)
                    alert('绑定成功')
                    this.props.history.push('/home')
                } else {
                    alert('配对码错误')
                }
            })
        }else{
            alert('请输入TA的配对码')
        }
        
        
    }

    render() {
        return (
            <div className="con">
                <h2 className="attention">绑定另一半后体验全部情侣功能</h2>
                <div className="cont-1">
                    <div className="txt-1">你的配对码</div>
                    <div>
                        <div className="code"> {this.state.secret}</div>
                        {/* <button className="btn-1" onClick={this.handleClick.bind(this)}>获取</button> */}
                    </div>
                    <div className="img-1">
                        <div className="img-2"><img src={qq} alt=""/> <div className="txt-2">QQ邀请</div></div>
                        <div className="img-2"><img src={weixin} alt=""/><div className="txt-2">qq邀请</div></div>
                        <div className="img-2"><img src={email} alt=""/><div className="txt-2">短信邀请</div></div>
                    </div>
                    <div className="line"></div>
                    <div className="txt-3">TA已注册，填写TA的配对码</div>
                    <div className="recode">
                        <input className="ver" placeholder="请输入TA的配对码" onChange={this.setHersecret}></input>
                        <button className="but" onClick={this.findSecret}>绑定</button>
                    </div>
                </div>
            </div>
        )
    }
}

