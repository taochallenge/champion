import React, { Component } from 'react'
import './css/write.css'
import { connect } from 'react-redux';
import { ImagePicker, InputItem, SegmentedControl, WingBlank } from 'antd-mobile';
const data = [];
class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: localStorage['id'],
            files: data,
        }
    }
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
    handelTree = (e) => {
        e.preventDefault();
        fetch('/tree', {
            method: 'POST',
            headers: {
                'content-type': 'text/plain'
            },
            body: JSON.stringify({
                url: this.state.url,
                filename: this.state.filename,
                content: this.state.content,
                uid: localStorage['id'],
            })
        })
            // .then(res => res.json())
            // .then(res => {
            //     this.props.history.push('/shequ/tui')
            // })
        this.props.history.push('/shequ/tui')
    }
    handleChange = (e) => {
        this.setState({ content: e.target.value });
    }

    render() {
        const { files } = this.state
        return (
            <div id='all2'>
                <div id='nav2'>
                    <div id='da1'>
                        <img
                            src={require('../imgs/jt.png')}
                            onClick={() => {
                                this.props.history.push('/shequ');
                            }}
                        />
                    </div>
                    <div id='text1'>种棵树</div>

                </div>
                <div id='body'>
                    <div>
                        <form>
                            <div id='textarea'><textarea rows='5' cols='50' placeholder='输入你此刻最想分享的内容……'
                                id='inp'
                                ref={inp => this.input = inp}
                                value={this.state.inpValue}
                                onChange={this.handleChange}
                            ></textarea></div>
                            <WingBlank>
                                <ImagePicker
                                    files={files}
                                    onChange={this.onChange}
                                />
                            </WingBlank>
                            <div type='submit' value='发布'
                                id='write-submit'
                                onClick={this.handelTree}
                            >发布</div>
                        </form>
                    </div>
                </div>
            </div>
        )


    }
}
const mapStateToProps = (state) => ({
    list: state.list,
})

export default connect(mapStateToProps)(Write)