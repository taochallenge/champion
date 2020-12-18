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
    
    componentDidMount(){
        this.props.dispatch(getMemory(localStorage['id'],localStorage['herid']));
    }

    render() {
        return (
            <div>
                <div className='memory'>
                    <div className='jinian-nav'>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left"/>}
                            onLeftClick={() => this.props.history.push('/home')}
                            rightContent={[
                                <img src={require('./imgs/jiahao.png')} id='add' onClick={() => {
                                    this.props.history.push('/create')}} 
                                />,
                            ]}
                            >纪念日</NavBar>
                    </div>
                    <div className='jinian-title'>
                        <p id='jinian-header'>发现我们的恋爱新世界——遇TA</p>
                        <p id='jinian-time'>
                            我们的故事从这里开始...
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




