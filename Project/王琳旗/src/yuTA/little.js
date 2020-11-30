import React from 'react'
import './users.css'

const Little = () => {
    return (
        <div class='wrapUsers'>
            <div class='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>小事编号</th>
                    <th>小事名字</th>
                    <th>小事图片路径</th>
                    <th>小事完成状态</th>
                    <th>小事时间</th>
                </tr>
                </table>
            </div>
        </div>
    )
}

export default Little