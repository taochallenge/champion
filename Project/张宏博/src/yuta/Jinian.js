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
                    icon={<Icon type="left"/>}
                    onLeftClick={() => this.props.history.push('/Home')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" onClick={() => {
                            this.props.history.push('/Create')}} 
                        />,
                    ]}
                    >纪念日</NavBar>
                    <div className='title'>
                        <p>发现我们的恋爱新世界——遇TA</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jinian



