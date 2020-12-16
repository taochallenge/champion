import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import img1 from '../imgs/yuyin.png';
import img2 from '../imgs/emoji.png';
import img3 from '../imgs/more.png';
import img4 from '../imgs/movie.png';
import './css/qiaoqiao.css'
export class Qiaoqiao extends Component {
    
    constructor() {
        
        super();
        this.handleButtonPress = this.handleButtonPress.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)
        this.state = {
            inpValue: '',
            todos: []
        }
    }

    handleChange = (e) => {
        this.setState({ inpValue: e.target.value });
    }
    componentDidMount() {
        // this.input.focus();
        let todos = localStorage.getItem('todos');
        if (todos) {
            this.setState({
                todos: JSON.parse(todos)
            })
        }
    }
    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
    addTodo = () => {

        if (this.state.inpValue == '') {
            alert('请输入有效字段')
            return;
        }
        this.setState({

            todos: [
                ...this.state.todos,
                {
                    title: this.state.inpValue,
                    done: false,
                },

            ],
        })
        this.setState({ inpValue: '' })
    }
    delTodo = (idx) => {
        this.setState({
            todos: this.state.todos.filter((item, index) => index != idx)
        })
    }
    toggle = (index) => {
        let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        newTodos[index].done = !newTodos[index].done
        this.setState({
            todos: newTodos
        })
    }

    handleButtonPress() {
        return this.state.todos.map((todo, idx) => {
        this.buttonPressTimer = setTimeout(() =>{this.delTodo(idx)}, 500);
        })
    }

    handleButtonRelease() {
        clearTimeout(this.buttonPressTimer);
    }
    renderTodos = (done) => {
        const date = new Date();
        const nowadays = date.getDate(); // 本日
        const thisMonth = date.getMonth() + 1; // 本月
        const hours = date.getHours();
        var minutes = date.getMinutes();
        return this.state.todos.map((todo, idx) => {
            if (done == todo.done) {
                return <div className='duihua'>
                    <div className='time'>{thisMonth}月{nowadays}日{hours}:{minutes}</div>
                    <div className='touxiang'></div>
                    <div><div className='talk' 
                        onTouchStart={this.handleButtonPress}
                        onTouchEnd={this.handleButtonRelease}
                        onMouseDown={this.handleButtonPress}
                        onMouseUp={this.handleButtonRelease}
                        onMouseLeave={this.handleButtonRelease}
                        dangerouslySetInnerHTML={{ __html: todo.title }}></div>
                    </div>

                </div>
            }
        })
    }
    
    render() {
        return (
            <div>

                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >悄悄话</NavBar>
                <div className='beijing'>
                    {
                        this.renderTodos(false)

                    }
                </div>
                <div className='dibu'>
                    <div><img src={img1} alt='' style={{ width: '6%', marginTop: '1%', float: 'left', marginTop: '5px' }}></img></div>
                    <input type='text' placeholder='亲爱的,我想对你说' style={{ float: 'left', width: '55%', height: '20px', marginTop: '5px', marginLeft: '5px', border: 'none', color: 'rgb(155,151,155)' }}
                        id='input'
                        autoComplete="off"
                        ref={inp => this.input = inp}
                        value={this.state.inpValue}
                        onChange={this.handleChange}
                        addTodo={this.addTodo}>
                    </input>
                    <button style={{ float: 'left', width: '10%', height: '24px', marginTop: '5px', marginLeft: '0px', backgroundColor: '#F88180', color: 'white' }} onClick={
                        this.addTodo
                    }>发送</button>
                    <div><img src={img2} alt='' style={{ width: '6%', marginTop: '1%', float: 'left', marginLeft: '5px', marginTop: '5px' }}></img></div>
                    <div><img src={img3} alt='' style={{ width: '6%', marginTop: '1%', float: 'left', marginLeft: '5px', marginTop: '5px' }}></img></div>
                    <div><img src={img4} alt='' style={{ width: '6%', marginTop: '1%', float: 'left', marginLeft: '5px', marginTop: '5px' }}></img></div>
                </div>
            </div>
        )
    }
}
export default Qiaoqiao