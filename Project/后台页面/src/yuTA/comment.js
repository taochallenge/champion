import React, { useEffect } from 'react'
import './users.css'
import getComment from '../GetData/getComment'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

const Comment = (props) => {
    useEffect(() => {
        props.dispatch(getComment());
    }, [])
    const deleteComment = async (id) => {
        let url = '/comment/' + id;
        await fetch(url, {
            method: 'DELETE'
        });
        await props.history.go(0)
    }
    return (
        <table width='1200px' rules='rows'>
            <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>评论编号</th>
                    <th>评论内容</th>
                    <th>评论时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.commentlist.map((data, index) => {
                        return (
                            <tr align='center' key={index} >
                                <td>{data.id}</td>
                                <td>{data.content}</td>
                                <td>{data.time}</td>
                                <td>
                                    <img src={require('../imgs/sc.png')} alt=''  onClick={deleteComment.bind(this, data.id)}></img>
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
    commentlist: state.commentlist,
})

export default connect(mapStateToProps)(withRouter(Comment));
