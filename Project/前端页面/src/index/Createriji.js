import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './css/Createriji.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
var date = new Date();
var year = date.getFullYear(); 
var month = date.getMonth()+1;
var day = date.getDate();
var hours=date.getHours();
var minutes=date.getMinutes();
var time=year+'-'+month+'-'+day+'  '+hours+':'+minutes
class Createriji extends Component {
    constructor(){
        super();
        this.state={
            uid:localStorage['id'],
            time:time
        }
    }
    
    handelTree = (e) => {
        e.preventDefault();
        fetch('/diaries', {
            method: 'POST',
            headers: {
                'content-type': 'text/plain'
            },
            body: JSON.stringify({
                content:this.state.content,
                time:this.state.time,
                uid:localStorage['id']
            })
        })
        // .then(res=>res.json())
        // .then(res=>{
        //     this.props.history.push('/riji')
        // })
        this.props.history.push('/riji')
      }
    handleChange=(e)=>{
        this.setState({
            content:e.target.value,                 
        });
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <form>
                <NavBar
                    mode="light"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => this.props.history.push('/riji')}
                    rightContent={[
                        <div type='submit' value='发布'
                        id='rj-submit'
                        onClick={this.handelTree}
                        >发送</div>      
                    ]}
                >新建记录</NavBar>
                <textarea placeholder='在这里记录我们的点点滴滴' cols='50' rows='22'
                id='rj'
                ref = {rj=>this.input=rj}
                value={this.content}
                onChange={this.handleChange}  
                >
                </textarea>
                <div id='ctime'>{time}</div>
            </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    rjlist: state.rjlist,
})
  
export default connect(mapStateToProps)(withRouter(Createriji));

