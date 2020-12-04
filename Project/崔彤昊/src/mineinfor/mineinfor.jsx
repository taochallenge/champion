import React, { Component } from 'react';
import './mineinfor.css';

export default class Mineinfor extends Component {

    render() {

        return (
            <div className="we-all">
                <div className="ret" onClick={() => this.props.history.push('/mine')}></div>
                <div className="shit">
                    <div className="wetxt">
                        <div className="stxt">相恋日期 </div>
                        <div className="date"></div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">我的头像</div>
                        <div className="head"></div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">我的昵称</div>
                        <div className="name"></div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">我的生日</div>
                        <div className="birth"></div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">TA的头像</div>
                        <div className="head"></div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">TA的昵称</div>
                        <div className="name"></div>
                    </div>
                    <div className="wetxt">
                        <div className="stxt">TA的生日</div>
                        <div className="birth"></div>
                    </div>
                    <textarea className="wetext" >恋爱宣言：</textarea>

                </div>
            </div>
        );
    }
}



