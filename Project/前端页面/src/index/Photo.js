import React, { Component } from 'react'
import { NavBar, Icon, Button, Toast, WhiteSpace, Modal } from 'antd-mobile'
import './css/photo.css'
import p from './imgs/photo.png'
const prompt = Modal.prompt;
export default class Photo extends Component {

    constructor() {
        super()
        this.state = {
            row: []
        }
    }

    set = () => {
        this.setState({ create: 1 })
    }

    createPhoto = () => {
        const { row } = this.state
        row.push(
            <div className='new-all'>
                <div className='photo-new'></div>
                <div style={{marginTop:'100%'}}>123</div>
            </div>
        )
        this.setState({ row })
    }
    render() {
        console.log(this.state);
        return (

            <div className='photo-all'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                >时光相册</NavBar>
                <div className='photo-create' onClick={this.createPhoto}>
                    <span>新建相册</span>
                </div>
                <div>{this.state.row}</div>
                <Button onClick={() => prompt(
                    '新建相册',
                    '请输入相册名称',
                    value => console.log(`value: ${value}`),
                )}
                >secure-text</Button>
            </div>
        )
    }
}
