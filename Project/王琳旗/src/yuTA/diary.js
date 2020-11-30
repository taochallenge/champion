import React from 'react'
import './users.css'

const Diary = () => {
    return (
        <div class='wrapUsers'>
            <div class='mainRightUsers'>
            <table width='1200px' rules='rows'>
                <tr bgcolor='#E6E6E6'>
                    <th>日记编号</th>
                    <th>日记内容</th>
                    <th>日记图片路径</th>
                    <th>日记视频路径</th>
                    <th>日记时间</th>
                    <th>日记创作者</th>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Diary