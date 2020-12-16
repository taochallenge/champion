import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDiary } from './actionCreators';
import './css/Riji.css'

class Riji extends Component {
    constructor(props){
        super(props);  
        this.state={
            herid:localStorage['herid'],
            id:localStorage['id']
        }
    };
    
    componentDidMount() {
        this.props.dispatch(getDiary(localStorage['id'],localStorage['herid']));
        // this.props.dispatch(getDiary());
        fetch('/getdiaries',{
            method:'POST',
            body:JSON.stringify(this.state)
        })
    }
    // handelTree = (e) => {
    //     e.preventDefault();
    //     fetch('/getdiaries', {
    //       method: 'POST',
    //       headers: {
    //         'content-type': 'text/plain'
    //       },
    //       body: JSON.stringify(this.state)
    //     })
    // }
    // handleChange=(e)=>{
    //     this.setState({content:e.target.value});
    // }
    
    render() {
        return ( 
            <div>
                <div className='riji-tag'>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" id='back1'/>}
                        onLeftClick={() => this.props.history.push('/home')}
                        rightContent={[
                            <img src={require('./imgs/write.png')} id='riji-one' onClick={() => {
                                this.props.history.push('/createriji')}} 
                            />,                    
                        ]}
                    >恋爱记录</NavBar>    
                </div> 

                <div className='book'>
                {
                    this.props.rjlist.map((val1)=>(
                        <div key={val1.id} id='riji-can'>
                            <div id='riji-tx'>
                                <img src={val1.imgpath} />
                            </div>
                            <div id='riji-time'>
                                {val1.time}
                            </div>
                            <textarea  cols='48' rows='6' >{val1.content}</textarea>
                        </div>
                    ))
                }
                </div>
            </div>   
        )
    }
}

const mapStateToProps = (state) => ({
    rjlist: state.rjlist,
})
  
export default connect(mapStateToProps)(withRouter(Riji));


