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

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            date: now,
            time: now,
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
                time: this.state.date.toLocaleDateString().split('/').join('-')+' '+String(this.state.date).slice(16,21),
                uid: localStorage['id'],
                // countdown: this.state.day + '天' + this.state.hour + '时' + this.state.minute + '分' + this.state.second + '秒',
                countdown: this.state.day + '天' + this.state.hour + '时' + this.state.minute + '分' + this.state.second + '秒',
            })
        })
            .then(res => res.json())
            .then(res => {
                this.props.history.push('/Jinian')
            })
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
                        <img src={require('./imgs/editor.png')} id='editor-one' />
                        <div id='editor'>
                        <input
                            placeholder="这是你和TA的什么纪念日"
                            id='jn'
                            ref={jn => this.input = jn}
                            value={this.name}
                            onChange={this.handleChange}
                        />

                        </div>
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


