import React,{useEffect}  from 'react'
import './users.css'
import getCentence from '../GetData/getCentence'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Centence = (props) => {
    useEffect(() => {
        props.dispatch(getCentence());
    }, [])
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>句子编号</th>
                    <th>句子内容</th>
                    <th>句子时间</th>
                    <th>句子是否被收藏</th>
                    <th>句子标题</th>
                    <th>句子英文标题</th>
                </tr>
                <tbody>
                {
                    props.centencelist.map((data,index)=> {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.time}</td>
                                <td>{data.collect==1?'已收藏':'未收藏'}</td>
                                <td>{data.title}</td>
                                <td>{data.titleenglish}</td>
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
    centencelist: state.centencelist,
})

export default connect(mapStateToProps)(withRouter(Centence));