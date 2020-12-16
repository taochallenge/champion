import React, { Component } from 'react'
import { DatePicker, List } from 'antd-mobile';
import './css/Time.css'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);

if (minDate.getDate() !== maxDate.getDate()) {
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

// function formatDate(date) {
//   const pad = n => n < 10 ? `0${n}` : n;
//   const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
//   const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
//   return `${dateStr} `;
// }

class Time extends Component {
    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
    render() {
        return (
            <div className="timelist">
                <List className="date-picker-list" style={{ backgroundColor: 'white' ,width:'80vw',height:'7vh',border: '0'}}>
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
        )
    }
}

export default Time
