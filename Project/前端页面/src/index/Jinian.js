import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { getMemory } from './actionCreators';
import './css/Jinian.css'

class Jinian extends Component {
    constructor(props){
        super(props);  
    };
    
    componentDidMount() {
        this.props.dispatch(getMemory());
    }
    
    render() {
        console.log(this.props.memory);
        return (
            <div>
                <div className='memory'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" id='back1'/>}
                    onLeftClick={() => this.props.history.push('/home')}
                    rightContent={[
                        <img src={require('./imgs/jiahao.png')} id='add' onClick={() => {
                            this.props.history.push('/create')}} 
                        />,
                    ]}
                    >纪念日</NavBar>
                    <div className='jinian-title'>
                        <p id='jinian-header'>发现我们的恋爱新世界——遇TA</p>
                        <p id='jinian-time'>
                            还有<span>340</span>天<span>23</span>时<span>11</span>分
                        </p>
                    </div>

                    <div className='mind'>
                    {
                        this.props.memory.map((val2)=>(
                            <div key={val2.id} id='jinian-can'>
                                <div id='jinian-tx'>
                                    <img src={require('./imgs/cake.png')}/>  
                                </div>
                                <div id='jinian-ct'>
                                    <div id='jinian-name'>{val2.name}</div>
                                    <div id='jinian-click'>{val2.time}</div>
                                    <div id='jinian-word'>已经</div>
                                    <div id='jinian-countdown'>{val2.countdown}</div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    memory: state.memory,
})
  
export default connect(mapStateToProps)(withRouter(Jinian));




