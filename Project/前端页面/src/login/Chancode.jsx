import React, { Component } from 'react';
import './css/chancode.css';


export default class Chancode extends Component {
    constructor(){
        super()
        this.state={
            oldpass:'',
            newpass:'',
            conpass:''
        }
    }
    change = (type, e) => {
        this.setState({
          [type]: e.target.value
        })
    }
    confirm = () => {
        console.log(this.state);
        if(this.state.newpass == this.state.conpass){
            console.log(this.state.newpass);
            fetch('/changepass',{
                method:'POST',
                body:JSON.stringify({
                    id:localStorage['id'],
                    password:this.state.newpass
                })
            })
            this.props.history.push('/enter')
        }
    }
    render() {
        return (
            <div className="chanenter">
                <div className="ret" onClick={() => this.props.history.push('/code')}></div>
                <div className="put">
                    <div><input className="codeout" onChange={(e) => this.change("oldpass", e)} placeholder="请输入原密码"></input></div>
                    <div><input className="codeout" onChange={(e) => this.change("newpass", e)} placeholder="请输入输入新密码"></input></div>
                    <div><input className="codeout" onChange={(e) => this.change("conpass", e)} placeholder="请再次输入新密码"></input></div>
                </div>
                <div className="next">
                    <button className="codeout" onClick={this.confirm}>确认修改</button>
                </div>
            </div>
        );
    }
}




