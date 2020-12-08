import React,{useEffect}  from 'react'
import './users.css'
import getLittle from '../GetData/getLittle'
import { connect } from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import {RouteWithSubRoutes} from '../App';

const Little = (props) => {
    useEffect(() => {
        props.dispatch(getLittle());
    }, [])
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>小事编号</th>
                    <th>小事名字</th>
                    <th>小事时间</th>
                    <th>小事图片路径</th>
                    <th>小事完成状态</th>
                    <th>地点</th>
                    <th>小事描述</th>
                    <th>操作</th>
                </tr>
                <tbody>
                {
                    props.littlelist.map((data,index)=> {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.time}</td>
                                <td>{data.imgpath}</td>
                                <td>{data.state==0?'未完成':'已完成'}</td>
                                <td>{data.place}</td>
                                <td>{data.describe}</td>
                                <td>
                                    {
                                        props.routes.map((route) => (
                                            <RouteWithSubRoutes {...route}/>
                                        ))
                                    }
                                        <img src={require('../imgs/sc.png')} alt=''></img>
                                        {/* <NavLink to={{
                                            pathname:"/home/little/littlechange",
                                            id:data.id
                                        }}>
                                            <img src={require('../imgs/xg.png')} alt=''></img>
                                        </NavLink> */}
                                        <NavLink to="/home/little/littleup">
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
    littlelist: state.littlelist,
})

export default connect(mapStateToProps)(withRouter(Little));