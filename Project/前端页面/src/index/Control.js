import React, { Component } from 'react'


//导入css文件（同目录下）
//import './control.css';


//组件名首字母一定要大写！！！
class Control extends Component {
    constructor(){
        super();
        this.state={
            inpValue:'',
            todos:[
                {title:'1',done:false},
                {title:'2',done:true},
                {title:'3',done:false},
                {title:'4',done:true},
            ]
        }
    }

    handleChange=(e)=>{
        this.setState({inpValue:e.target.value});
    }
    componentDidMount(){
        // this.input.focus();
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos:JSON.parse(todos)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('todos',JSON.stringify(this.state.todos))
    }
    addTodo=()=>{
        //可以这么写（不推荐）
        // this.state.todos.push({title:this.state.inpValue});
        // this.setState({
        //     todos:this.state.todos
        // })
        
        if(this.state.inpValue==''){
            alert('请输入有效字段')
            return;
        }
        this.setState({           
            todos: [
                {
                    title: this.state.inpValue, 
                    done:false,
                },
                ...this.state.todos
            ]
        })
        this.setState({inpValue:''})
    }
    delTodo=(idx)=>{
        //（不推荐）
        // this.state.todos.splice(idx,1);
        // this.setState({
        //     todos:this.state.todos
        // })

        //将数据深拷贝一份，避免将原有的数据删除
        // let newTodos=JSON.parse(JSON.stringify(this.state.todos))
        // newTodos.splice(idx,1);
        // this.setState({
        //     todos:newTodos
        // })


        this.setState({
            todos:this.state.todos.filter((item,index)=>index!=idx)
        })


        //setState是异步的,注意callback的用法
        // this.setState({
        //     todos:this.state.todos.filter((item,index)=>index!=idx)
        // },()=>{
        //      //两个参数都是字符串
        //     localStorage.setItem('todos',JSON.stringify(this.state.todos))
        // });
    }
    toggle=(index)=>{
        let newTodos=JSON.parse(JSON.stringify(this.state.todos))
        newTodos[index].done=!newTodos[index].done
        this.setState({
            todos:newTodos
        })
    }
    renderTodos=(done)=>{
       return this.state.todos.map((todo,idx)=>{                            
            if(done==todo.done){
                return <li>
                <input 
                    onClick={()=>this.toggle(idx)}
                    checked={done} 
                    type='checkbox'
                />
                <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
                <button
                    onClick={
                        ()=>this.delTodo(idx)
                    } 
                >删除</button>
            </li>
            }                          
        })
    }
    
    render() {
        const {todos,inpValue}=this.state;
        let arr1=todos.filter(item=>item.done)
        let arr2=todos.filter(item=>!item.done)
        // console.log(arr1);      
        return (
            <div className='box'>
                <label htmlFor=''>todoList</label>
                <input 
                id='inp'
                ref = {inp=>this.input=inp}
                value={inpValue}
                type="text"
                onChange={
                    this.handleChange
                }
                />
                <button
                onClick={
                    this.addTodo
                }
                >添加</button>
                <h2>正在进行             {arr2.length}</h2>
                {/* 行内css样式 */}
                <ul style={{color:'red'}}>
                    {
                        this.renderTodos(false)
                    }
                </ul>
                <h2>已完成的                    {arr1.length}</h2>
                <ul>
                    {
                        this.renderTodos(true)
                    }
                </ul>
            </div>
        )
    }
}

export default Control;