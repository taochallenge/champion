import React, { Component } from 'react';
import './css/question.css';

export default class Question extends Component {

    render() {

        return (
            <div className="cus-all">

                <div className="custitle">
                    <div className="ter" onClick={() => this.props.history.push('/set')}></div>关于
                </div>
                <div className="ques">
                    制作团队：遇TA项目组<br></br><br></br><br></br>
                    APP编号：0001 <br></br><br></br><br></br>
                    备案管理编号：2198458341987581
                </div>
            </div>
        );
    }
}



