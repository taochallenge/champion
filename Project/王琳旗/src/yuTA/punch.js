import React, { useEffect } from 'react'
import './users.css'
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';
import getPunch from '../GetData/getPunch'
import { connect } from 'react-redux';


const Punch = (props) => {
    useEffect(() => {
        props.dispatch(getPunch());
    }, [])
    const deletePunch = (id) => {
        let url = '/punch/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        props.history.push('/home/punch')
    }
    return (
        <table width='1200px' rules='rows'>
            <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>打卡人编号</th>
                    <th>打卡人时间</th>
                    <th>打卡人总天数</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.punchlist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.time}</td>
                                <td>{data.count}</td>
                                <td>
                                    {
                                        props.routes.map((route, i) => (
                                            <RouteWithSubRoutes {...route} key={i} />
                                        ))
                                    }
                                    <img src={require('../imgs/sc.png')} alt='' onClick={deletePunch.bind(this, data.id)}></img>
                                    <NavLink to="/home/punch/punchup">
                                        <img src={require('../imgs/tj.png')} alt=''></img>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    punchlist: state.punchlist,
})

export default connect(mapStateToProps)(withRouter(Punch));