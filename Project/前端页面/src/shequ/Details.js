import React, { Component } from 'react'
import './css/Tui.css'
import './css/details.css'
import { getContent } from './actionCreator';
import { connect } from 'react-redux';
Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
}
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeid: localStorage['treeid'],
            uid: localStorage['id'],
            comments:[],
            time:new Date().Format("yyyy-MM-dd hh:mm")
        }
    }
    componentDidMount=() => {
        this.props.dispatch(getContent(this.state.treeid));        
    };
    handelTree = (e) => {
        e.preventDefault();
        fetch('/comment', {
            method: 'POST',
            headers: {
                'content-type': 'text/plain'
            },
            body: JSON.stringify({
                treeid: localStorage['treeid'],
                uid: localStorage['id'],
                content: this.state.content,
                time:this.state.time,
            })
        })
            .then(res => res.json())
            .then(res => {
                this.props.history.go(0)
            })
    }

    onChange = (e) => {
        this.setState({ content: e.target.value })
    }
    render() {
        console.log(typeof(this.state.comments));
        console.log(localStorage['treeimg'])
        return (
            <div>
                <div id='details-nav'>
                    <div id='details-jt'>
                        <img src={require('../imgs/jt.png')}
                            onClick={() => {
                                this.props.history.push('/Shequ/Tui');
                            }}
                        />
                    </div>
                </div>
                <div id='top'></div>
                <div id='kuai'>
                    <div id='kuai-img'>
                        <img src={localStorage['src']} />
                    </div>
                    <div id='kuai-username'>{localStorage['name']}</div>
                    <div id='kuai-time'>热恋ing</div>
                    <textarea rows='2' id='val1' readonly='readonly'>{localStorage['content']}</textarea>
                    {
                        localStorage['treeimg'] != 'null'                       
                        ? <img id='kuai-imgpath' src={localStorage['treeimg']} />
                        : ''
                    }
                    {/* {
                        this.props.location.treeing == null
                            ? ''
                            : <img id='kuai-imgpath' src={this.props.location.treeing} />
                    } */}

                </div>
                <div id='details-middle'>
                    <div id='details-middle-text'>全部评论</div>
                </div>
                {
                    this.props.contentlist.map((val) => (
                        <div id='details-content'>
                            <div id='details-content-img'><img src={val.imgpath}/></div>
                            <div id='details-content-name'>{val.myname}</div>
                            <div id='details-content-time'>发布于{val.time}</div>
                            <textarea rows='2' readonly='readonly' id='details-content-content'>{val.content}</textarea>
                        </div>
                    ))
                }


                <div id='details-footer'>
                    <form>
                        <div id='details-ping'>
                            <input type='text' value={this.state.content} onChange={this.onChange} />
                        </div>
                        <div type='submit'
                            id='details-submit'
                            onClick={this.handelTree}
                        >发送</div>
                    </form>
                </div>
            </div>
        )
    }


}
const mapStateToProps = (state) => ({
    contentlist: state.contentlist,
    
})
  
export default connect(mapStateToProps)(Details);
