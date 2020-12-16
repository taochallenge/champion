import React from 'react'

const Shoucang = () => {
    return (
        <div>
            
        </div>
    )
}

<TabBar.Item
    icon={
        <i className='iconfont icon-favourited'></i>                           
    }
    selectedIcon={
        <i className='iconfont icon-shoucang'></i>                           
    }
    title="收藏"
    key="shoucang"
    selected={ pathname === '/shoucang' }
    onPress={ () => {
    this.props.history.push('/shoucang')
    } }
    data-seed="logId1"
></TabBar.Item>



export default Shoucang
