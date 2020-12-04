import React,{useEffect}  from 'react'
import './users.css'
import getMemory from '../GetData/getMemory'
import { connect } from 'react-redux';
import {NavLink,withRouter} from 'react-router-dom'
import {RouteWithSubRoutes} from '../App';

const Memory = (props) => {
    useEffect(() => {
        props.dispatch(getMemory());
    }, [])
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>纪念日编号</th>
                    <th>纪念日名字</th>
                    <th>纪念日时间</th>
                    <th>纪念日倒计时</th>
                    <th>操作</th>
                </tr>
                <tbody>
                {
                    props.memorylist.map((data,index)=> {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.time}</td>
                                <td>{data.countdown}</td>
                                <td>
                                    {
                                        props.routes.map((route) => (
                                            <RouteWithSubRoutes {...route}/>
                                        ))
                                    }
                                        <img src={require('../imgs/sc.png')} alt=''></img>
                                        <NavLink to={{
                                            pathname:"/home/memory/memorychange",
                                            id:data.id    
                                        }}>
                                            <img src={require('../imgs/xg.png')} alt=''></img>
                                        </NavLink>
                                        <NavLink to="/home/memory/memoryup">
                                            <img src={require('../imgs/tj.png')} alt=''></img>
                                        </NavLink>
                                    </td>
                            </tr>
                            
                        )
                    })
                }
                </tbody>
                </table>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    memorylist: state.memorylist,
})

export default connect(mapStateToProps)(withRouter(Memory));