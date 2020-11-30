import React from 'react'
import './users.css'

const Collection = () => {
    return (
        <div class='wrapUsers'>
            <div class='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>收藏树编号</th>
                    <th>收藏树内容</th>
                    <th>收藏树图片路径</th>
                    <th>相恋天数</th>
                    <th>羡慕人数</th>
                    <th>收藏树时间</th>
                    <th>收藏树者</th>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Collection