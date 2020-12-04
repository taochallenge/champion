import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './Createriji.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Createriji extends Component {
    constructor(){
        super();
        this.state={
            inpValue:'',
            todos:[]
        }
    }
    handleChange=(e)=>{
        this.setState({inpValue:e.target.value});
    }
    componentDidMount(){
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                inpValue:JSON.parse(todos)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('todos',JSON.stringify(this.state.todos))
    }
    addTodo=()=>{
        if(this.state.inpValue==''){
            alert('请输入内容')
            return;
        }
        this.setState({           
            todos: [
                {
                    title: this.state.inpValue
                },
                ...this.state.todos
            ]
        })
        this.setState({inpValue:''})
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" id='back'/>}
                    onLeftClick={() => this.props.history.push('/Riji')}
                    rightContent={[
                        <div
                        onClick={()=>{
                            this.props.history.push({
                                pathname:'/riji',
                            })
                            this.props.dispatch({
                                type:'GETDIARY',
                                rjlist: this.state.inpValue
                            })            
                        }}
                        >发送</div>      
                    ]}
                >新建记录</NavBar>
                <textarea placeholder='在这里记录我们的点点滴滴' cols='50' rows='22'
                id='inp'
                ref = {inp=>this.input=inp}
                value={this.inpValue}
                onChange={this.handleChange}                    
                addTodo = {this.addTodo}
                >
                </textarea>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    rjlist: state.rjlist,
})
  
export default connect(mapStateToProps)(withRouter(Createriji));

