import React, { Component } from 'react';
import './css/mineinfor.css'
export default class Mineinfor extends Component {
    constructor(){
        super()
        this.state={
            user:{}
        }
    }
    
    componentDidMount = () => {
        fetch('/user/'+localStorage['tel'])
        .then(res=>res.json())
        .then(res=>this.setState({user:res[0]}))
    }
    
    render() {

        return (
            <div className="we-all">
                <div className="ret" onClick={() => this.props.history.push('/mine')}></div>
                <div className="shit">
                    <div className="wetxt">
                        <div className="stxt">相恋日期 </div>
                        <div className="date">{this.state.user.lovedata}</div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">我的头像</div>
                        <img className="head" src={this.state.user.imgpath}></img>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">我的昵称</div>
                        <div className="name">{this.state.user.myname}</div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">我的生日</div>
                        <div className="birth">{this.state.user.birthday}</div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">TA的头像</div>
                        <img className="head" src={this.state.user.herimgpath}></img>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">TA的昵称</div>
                        <div className="name">{this.state.user.hername}</div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">TA的生日</div>
                        <div className="birth">{this.state.user.herbirthday}</div>
                    </div>
                    <textarea className="wetext" >恋爱宣言：</textarea>

                </div>
            </div>
        );
    }
}



