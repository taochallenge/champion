import React, { Component } from 'react'
import './write.css'
import {getDate} from './actionCreator'
import { connect } from 'react-redux';

class Write extends Component {
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
        let inpValue = localStorage.getItem('inpValue');
        if(inpValue){
            this.setState({
                inpValue:JSON.parse(inpValue)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('inpValue',JSON.stringify(this.state.inpValue))
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
    renderTodos=()=>{
       return this.state.todos.map((todo)=>{                                     
            return <div>
                <span dangerouslySetInnerHTML={{__html:todo.title}}></span>               
            </div>
                                    
        })
    }
    render() {       
        return (
         <div id='all2'>
            <div id='nav2'>
                <div id='da1'>
                    <img
                        src={require('../imgs/jiantou1.png')}
                        onClick={ () => {
                            this.props.history.push('/Shequ');
                        } }
                    />
                </div>
                <div id='text1'>种棵树</div>

                <div id='text2'                
                    onClick={()=>{
                        this.props.history.push({
                            pathname:'/Shequ',
                        })
                        this.props.dispatch({
                            type:'GETDATA',
                            list: this.state.inpValue
                        })
                        
                    }}
                >发布</div>
                
            </div>
            <div id='line1'></div>
            <div id='body'>
                <div id='textarea'>
                    <textarea rows='32' cols='40' placeholder='输入你此刻最想分享的内容……'                   
                    id='inp'
                    ref = {inp=>this.input=inp}
                    value={this.inpValue}
                    onChange={this.handleChange}                    
                    addTodo = {this.addTodo}
                    ></textarea>
                    <div>                
                        {
                            this.renderTodos()
                        }
                    </div>
                </div>
                <div id='body-xia'>
                    <div id='biaoqing'>
                        <img src={require('../imgs/weixiao.png')}/>
                    </div>
                    <div id='tupian'>
                        <img src={require('../imgs/tupian.png')}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.list,
})
  
export default connect(mapStateToProps)(Write)