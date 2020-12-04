import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './Riji.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Riji extends Component {
    constructor(props){
        super(props);  
    };
    render() {
        return (
            <div>
                
                <div className='book'>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" id='back'/>}
                        onLeftClick={() => this.props.history.push('/Home')}
                        rightContent={[
                            <img src={require('./imgs/write.png')} id='riji-one' onClick={() => {
                                this.props.history.push('/Createriji')}} 
                            />,                    
                        ]}
                    >恋爱记录</NavBar>
                    
                </div> 
                {
                    this.props.rjlist.map((val1)=>(
                        <div id='riji-can'>
                            <div id='riji-tx'>
                                <img src={require('./imgs/19.jpg')} />
                            </div>
                            <div id='riji-time'>
                                今天  15:21
                            </div>
                            <textarea  cols='48' rows='3' >{val1}</textarea>
                        </div>
                    
                    ))
                }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    rjlist: state.rjlist,
    
})
  
export default connect(mapStateToProps)(withRouter(Riji));


