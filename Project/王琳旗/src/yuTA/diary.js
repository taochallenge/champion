import React, { useEffect } from 'react'
import './users.css'
import getDiary from '../GetData/getDiary'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';

const Diary = (props) => {
    useEffect(() => {
        props.dispatch(getDiary());
    }, [])
    const deleteDiary = async (id) => {
        let url = '/diaries/' + id;
        await fetch(url, {
            method: 'DELETE'
        });
        await props.history.go(0)
    }
    return (
        <table width='1200px' rules='rows'>
            <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>日记编号</th>
                    <th>日记内容</th>
                    <th>日记图片路径</th>
                    <th>日记视频路径</th>
                    <th>日记时间</th>
                    <th>日记创作者</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.diarylist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.imgpath}</td>
                                <td>{data.videopath}</td>
                                <td>{data.time}</td>
                                <td>{data.uid}</td>
                                <td>
                                    {
                                        props.routes.map((route, i) => (
                                            <RouteWithSubRoutes {...route} key={i} />
                                        ))
                                    }
                                    <img src={require('../imgs/sc.png')} alt='' onClick={deleteDiary.bind(this, data.id)}></img>
                                    <NavLink to="/home/diary/diaryup">
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
    diarylist: state.diarylist,
})

export default connect(mapStateToProps)(withRouter(Diary));