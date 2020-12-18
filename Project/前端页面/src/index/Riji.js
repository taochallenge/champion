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
    deleteRiji = (id) => {    
    
        fetch('/diaries/'+ id,{
            method: 'DELETE',            
        }).then(()=>{this.props.history.go(0)})
        // this.props.history.go(0)
    }
    componentDidMount() {
        this.props.dispatch(getDiary(localStorage['id'],localStorage['herid']));
        fetch('/getdiaries',{
            method:'POST',
            body:JSON.stringify(this.state)
        })
        
    }
    
   
    render() {
        return ( 
            <div>
                <div className='riji'>
                    <div className='riji-tag'>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
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
                                <div id='riji-btn' onClick = {this.deleteRiji.bind(this,val1.id)}>删除</div>
                                {/* <div id='riji-btn' onClick = {this.deleteRiji.bind(val1.id)}>删除</div> */}
                                <textarea  cols='45' rows='6' >{val1.content}</textarea>
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
    rjlist: state.rjlist,
})
  
export default connect(mapStateToProps)(withRouter(Riji));


