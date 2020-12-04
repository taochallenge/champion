import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Time from './Time'
import Editor from './Editor';
import Click from './Click'
import './Create.css'

class Create extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" id='back1'/>}
                    onLeftClick={() => this.props.history.push('/Jinian')}
                >创建纪念日</NavBar>
                <Editor/>
                <Time/>
                <Click/>
                <div id='btn'>  
                    <input type='submit' value='保存'/>
                </div>
            </div>
        )
    }
}
export default Create
