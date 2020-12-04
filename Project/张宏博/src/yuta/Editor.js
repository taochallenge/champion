import React, { Component } from 'react'
import { List, InputItem } from 'antd-mobile';
import './Editor.css'

class Editor extends Component {
    render() {
        return (
            <div>
                <List >
                    <InputItem
                        placeholder="这是你和TA的什么纪念日"
                    >
                        <img src={require('./imgs/editor.png')} id='time-one'/>
                    </InputItem>
                </List>
            </div>
        )
    }
}

export default Editor
