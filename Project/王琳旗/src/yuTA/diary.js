import React,{useEffect}  from 'react'
import './users.css'
import getDiary from '../GetData/getDiary'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Diary = (props) => {
    useEffect(() => {
        props.dispatch(getDiary());
    }, [])
    return (
        <div className='wrapUsers'>
            <div className='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>日记编号</th>
                    <th>日记内容</th>
                    <th>日记图片路径</th>
                    <th>日记视频路径</th>
                    <th>日记时间</th>
                    <th>日记创作者</th>
                </tr>
                <tbody>
                {
                    props.diarylist.map((data,index)=> {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.imgpath}</td>
                                <td>{data.videopath}</td>
                                <td>{data.time}</td>
                                <td>{data.uid}</td>
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
    diarylist: state.diarylist,
})

export default connect(mapStateToProps)(withRouter(Diary));