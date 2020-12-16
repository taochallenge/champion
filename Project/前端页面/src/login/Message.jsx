import React, { Component } from 'react';
import './css/message.css';
import man from './img/man.png'
import woman from './img/woman.png'
import { NavBar, Icon, ImagePicker, DatePicker, List } from 'antd-mobile';
import Time from './Time'
const data = [];

// 选择日期
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);

if (minDate.getDate() !== maxDate.getDate()) {
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

export default class Message extends Component {

    state = {
        files: data,
        multiple: false,
        sex: '',
        myname: '',
        birthday: '',
        secret: '',

        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    };
    onChange = (files, type, index) => {
        console.log(files, type, index);
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        this.setState({
            files,
            url: files[0].url,
            filename: '' + year + month + day + hour + minute + second + '.jpg'
        });
    };
    setMyname = (e) => {
        this.setState({
            myname: e.target.value
        })
    }
    setBirthday = (e) => {
        this.setState({
            birthday: e.target.value
        })
    }
    setSex = () => {
        this.setState({
            sex: localStorage['sex']
        })
        fetch('/getid/' + localStorage['tel'])
            .then(res => res.json())
            .then(res => localStorage['id'] = res[0].id)

        // 设置专属配对码
        let code = '';
        for (var i = 1; i <= 6; i++) {
            const num = Math.floor(Math.random() * 10);
            code += num;
        }
        this.setState({ secret: code });
        localStorage['secret'] = code
    }
    addName = () => {
        fetch('/addmyname', {
            method: 'POST',
            headers: {
                'content-type': 'text/plain'
            },
            body: JSON.stringify({
                id: localStorage['id'],
                sex: this.state.sex,
                myname: this.state.myname,
                birthday: this.state.date.toLocaleDateString().split('/').join('-'),
                secret: this.state.secret,
                url: this.state.url,
                filename: this.state.filename
            })
        })

        if(this.state.url){
            this.props.history.push('/pairing')
        }
        
    }

    render() {
        const { files } = this.state;
        console.log(this.state);
        return (

            <div className="backall">
                <div className="textt">遇TA</div>
                <div className="photo">
                    <ImagePicker className='pho'
                        files={files}
                        onChange={this.onChange}
                        selectable={files.length < 1}
                        disableDelete={true}
                        style={{ width: '100%' }}
                    />
                    <span>上传头像</span>
                </div>
                <div className="choose">
                    <div className="man" id='man'
                        onClick={() => {
                            // document.getElementsByClassName('man')[0].src = mans
                            document.getElementById('man').style.backgroundColor = '#e6e6e6'
                            localStorage['sex'] = '男'
                            onchange = this.setSex
                        }}>
                        <img src={man} />
                    </div>

                    <div className="man" id='girl'
                        onClick={() => {
                            // document.getElementsByClassName('man')[0].src = womans
                            document.getElementById('girl').style.backgroundColor = '#e6e6e6'
                            localStorage['sex'] = '女'
                            onchange = this.setSex
                        }}>
                        <img src={woman} />
                    </div>
                </div>
                <div className="put">
                    <div className="puon">
                        <div className="exaid">你的昵称</div>
                        <input className="putton" onChange={this.setMyname}></input>
                    </div>
                    <div>
                        <div className="timelist">
                            <List className="date-picker-list" style={{ backgroundColor: 'white', width: '80vw', height: '7vh', border: '0' }}>
                                <DatePicker
                                    mode='date'
                                    value={this.state.date}
                                    onChange={date => this.setState({ date })}
                                >
                                    <List.Item arrow="horizontal">
                                        <div className="birtex"> 你的生日</div>

                                    </List.Item>
                                </DatePicker>
                            </List>
                        </div>
                    </div>

                </div>
                <div className="next">
                    <button className="butt" onClick={this.addName}>下一步</button>
                </div>

            </div>
        );
    }
}




