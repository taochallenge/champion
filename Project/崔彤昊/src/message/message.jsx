import React, { Component } from 'react';
import './message.css';
import man from '../img/man.png'
import mans from '../img/mans.png'
import woman from '../img/woman.png'
import womans from '../img/womans.png'
import { ImagePicker } from 'antd-mobile';
const data = [];

export default class Message extends Component {

    state = {
        files: data,
        multiple: false,
    };
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    };


    render() {
        const { files } = this.state;
        return (


            <div className="backall">
                <div className="textt">遇TA</div>
                <div className="photo">
                    <ImagePicker className='cho'
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                        multiple={this.state.multiple}
                        capture={false}
                    />
                    <img className="imarea"></img>
                    <span>上传头像</span>
                </div>
                <div className="choose">
                    <div className="man" id='man'
                        onClick={() => {
                            document.getElementsByClassName('man')[0].src = mans
                        }}>
                        <img src={man} />
                    </div>

                    <div className="man" id='girl'
                        onClick={() => {
                            document.getElementsByClassName('man')[0].src = womans
                        }}>
                        <img src={woman} />
                    </div>
                </div>
                <div className="put">
                    <input className="putton" placeholder="你的昵称"></input>
                    <input className="putton" placeholder="你的生日"></input>
                </div>
                <div className="next">
                    <button className="butt" onClick={() => this.props.history.push('/mine')}>下一步</button>
                </div>

            </div>
        );
    }
}




