import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './Jinian.css'

class Jinian extends Component {
    render() {
        return (
            <div>
                <div className='memory'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" id='back'/>}
                    onLeftClick={() => this.props.history.push('/Home')}
                    rightContent={[
                        <img src={require('./imgs/jiahao.png')} id='add' onClick={() => {
                            this.props.history.push('/Create')}} 
                        />,
                    ]}
                    >纪念日</NavBar>
                    <div className='title'>
                        <p>发现我们的恋爱新世界——遇TA</p>
                        <p id='time'>还有
                        <span> 340</span> 天
                        <span> 23</span> 时
                        <span> 11</span> 分
                        </p>
                    </div>
                    <div className='mind1'>
                    <img src={require('./imgs/cake.png')}/>
                    {/* <p id='first'>发现我们的恋爱新世界</p>
                    <p id='second'></p>
                    <p id='third'>发现我们的恋爱新世界</p>
                    <p id='fourth'>发现我们的恋爱新世界</p> */}
                    </div>
                    <div className='mind2'>
                    <img src={require('./imgs/cake.png')}/>
                    <p>在一起</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jinian



