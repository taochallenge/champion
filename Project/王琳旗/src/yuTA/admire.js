import React from 'react'
import './users.css'

// let listaddmire= this.state.list.map((user,index)=> {
//     return (
//      <tr key={index}>
//        <td>{user.id}</td>
//        <td>{user.myname}</td>
//        <td>{user.age}</td>
//        <td>{user.location}</td>
//        <td>{user.birthday}</td>
//        <td>{user.lovedata}</td>
//        <td>{user.secret}</td>
//        <td>{user.tel}</td>
//        <td>{user.state}</td>
//        <td>{user.password}</td>
//    </tr>
//  )
// });
const Admire = () => {
    return (
        <div class='wrapUsers'>
            <div class='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <thead>
                <tr bgcolor='#E6E6E6'>
                    <th>羡慕树编号</th>
                    <th>羡慕树内容</th>
                    <th>羡慕树图片路径</th>
                    <th>相恋天数</th>
                    <th>羡慕人数</th>
                    <th>是否被收藏</th>
                    <th>羡慕树时间</th>
                    <th>羡慕树者</th>
                </tr>
                </thead>
                {/* <tbody>
                {
                    listadmire
                }
                </tbody> */}
                </table>
            </div>
        </div>
    )
}

export default Admire