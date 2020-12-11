import React, { useEffect } from 'react'
import './users.css'
import getCentence from '../GetData/getCentence'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'
import { RouteWithSubRoutes } from '../App';

const Centence = (props) => {
    useEffect(() => {
        props.dispatch(getCentence());
    }, [])
    const deleteCentnece = (id) => {
        let url = '/centence/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        props.history.push('/home/centence')
    }
    return (
        <table width='1200px' rules='rows'>
            <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>句子编号</th>
                    <th>句子内容</th>
                    <th>句子时间</th>
                    <th>句子是否被收藏</th>
                    <th>句子标题</th>
                    <th>句子英文标题</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.centencelist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.time}</td>
                                <td>{data.collect == 1 ? '已收藏' : '未收藏'}</td>
                                <td>{data.title}</td>
                                <td>{data.titleenglish}</td>
                                <td>
                                    {
                                        props.routes.map((route, i) => (
                                            <RouteWithSubRoutes {...route} key={i} />
                                        ))
                                    }
                                    <img src={require('../imgs/sc.png')} alt='' onClick={deleteCentnece.bind(this, data.id)}></img>
                                    {/* <NavLink to={{
                                        pathname:"/home/centence/centencechange",
                                        id:data.id
                                    }}>
                                        <img src={require('../imgs/xg.png')} alt=''></img>
                                    </NavLink> */}
                                    <NavLink to="/home/centence/centenceup">
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
    centencelist: state.centencelist,
})

export default connect(mapStateToProps)(withRouter(Centence));