import React,{useEffect}  from 'react'
import './users.css'
import getMemory from '../GetData/getMemory'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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