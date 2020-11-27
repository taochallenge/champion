import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Mytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    render() {
        // const { pathname } = this.props.location;
        return (
            <div style={ {
                position: 'fixed',
                width: '100%',
                bottom: 0
            } }>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="black"
                    barTintColor="white"
                    
                >
                    <TabBar.Item                       
                        icon={
                            <i className='iconfont icon-wode1'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-wode1'></i>                           
                        }
                        title="我们"
                        key="home"
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-shequ-active'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-shequ-active'></i>                           
                        }
                        title="社区"
                        key="commit"
                        data-seed="logId1"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-home'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-home'></i>
                        }
                        title="我"
                        key="wode"
                        data-seed="logId1"
                    >                       
			        </TabBar.Item>
                   
                </TabBar>
            </div>
        );
    }
}
export default Mytab;