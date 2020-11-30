import React from 'react'
import './users.css'

const Chatting = () => {
    return (
        <div class='wrapUsers'>
            <div class='mainRightUsers'>
                <table width='1200px' rules='rows'>
                    <tr bgcolor='#E6E6E6'>
                        <th>记录编号</th>
                        <th>记录内容</th>
                        <th>记录图片路径</th>
                        <th>记录视频路径</th>
                        <th>记录时间</th>
                        <th>记录位置</th>
                        <th>记录创作者</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Chatting
