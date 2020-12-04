import React from 'react'

const Dingdan = (props) => {
    return (
        <div>
            订单列表
            <button onClick={props.history.goBack}>返回</button>
        </div>
    )
}

export default Dingdan
