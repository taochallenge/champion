import React from 'react'
import './users.css'

const Tree = () => {
    return (
        <div class='wrapUsers'>
            <div class='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>种树编号</th>
                    <th>种树内容</th>
                    <th>种树图片路径</th>
                    <th>相恋天数</th>
                    <th>羡慕人数</th>
                    <th>是否被收藏</th>
                    <th>种树时间</th>
                    <th>种树创作者</th>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Tree