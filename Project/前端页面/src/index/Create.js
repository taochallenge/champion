import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { List, InputItem, DatePicker } from 'antd-mobile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './css/Jinian.css'
import './css/Create.css'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);

if (minDate.getDate() !== maxDate.getDate()) {
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
}

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,

            date: now,
            // time: now,
            utcDate: utcNow,
            dpValue: null,
            customChildValue: null,
            visible: false,
        }
    }

    handelTree = (e) => {
        e.preventDefault();
        fetch('/memory', {
            method: 'POST',
            headers: {
                'content-type': 'text/plain'
            },
            body: JSON.stringify({
                name: this.state.name,
                time: this.state.date.toLocaleDateString().split('/').join('-'),
                countdown: this.state.day + '天' + this.state.hour + '时' + this.state.minute + '分' + this.state.second + '秒',
            })
        })
            .then(res => res.json())
            .then(res => {
                this.props.history.push('/Jinian')
            })
    }
    componentDidUpdate() {
        console.log(this.state.day)
        console.log(String(this.state.date).slice(16,21))
        // console.log(''+this.state.date.toLocaleDateString().split('/').join('-')+' '+String(this.state.date).slice(16,21));
        // const end1 = Date.parse(new Date('2020-12-14 24:00'))
        // console.log(end1);
        let e = String(this.state.date.toLocaleDateString().split('/').join('-')+' '+String(this.state.date).slice(16,21))
        console.log(e);
        const end = new Date(e).getTime()
        console.log(end);
        // const end = Date.parse(String(new Date(this.state.date.toLocaleDateString().split('/').join('-')+' '+String(this.state.date).slice(16,19))))
        this.countFun(end);
    }
    countFun = (end) => {
        let now_time = Date.parse(new Date());
        var remaining = now_time-end;
        
        this.timer = setInterval(() => {
            if (remaining > 1000) {
                remaining -= 1000;
                let day = Math.floor((remaining / 1000 / 3600) / 24);
                let hour = Math.floor((remaining / 1000 / 3600) % 24);
                let minute = Math.floor((remaining / 1000 / 60) % 60);
                let second = Math.floor(remaining / 1000 % 60);

                this.setState({
                    day: day,
                    hour: hour < 10 ? '0' + hour : hour,
                    minute: minute < 10 ? '0' + minute : minute,
                    second: second < 10 ? '0' + second : second
                })
            }
        }, 1000)
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <form>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.push('/jinian')}
                    >创建纪念日</NavBar>
                    <List>
                        <img src={require('./imgs/editor.png')} id='time-one' />
                        <input
                            placeholder="这是你和TA的什么纪念日"
                            id='jn'
                            ref={jn => this.input = jn}
                            value={this.name}
                            onChange={this.handleChange}
                        />


                    </List>
                    <List>
                        <DatePicker
                            value={this.state.date}
                            onChange={date => this.setState({ date })}
                        >
                            <List.Item arrow="horizontal">
                                <img src={require('./imgs/time.png')} id='time-one' />
                            </List.Item>
                        </DatePicker>
                    </List>
                    {/* <input onChange={this.countFun } /> */}

                    <div type='submit'
                        value='发布'
                        id='jinian-submit'
                        onClick={this.handelTree}
                    >发送</div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    rjlist: state.memory,
})

export default connect(mapStateToProps)(withRouter(Create));


