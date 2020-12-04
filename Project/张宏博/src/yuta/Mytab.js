import React from 'react';
import { Button, TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Mytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    render() {
        const { pathname } = this.props.location;
        return (
            <div style={ {
                position: 'fixed',
                width: '100%',
                bottom: 0
            } }>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#e5a3a3"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="我们"
                        key="home"
                        icon={
                            <i className='iconfont icon-wemen'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-women1'></i>                           
                        }
                        selected={ pathname === '/home' }
                        onPress={ () => {
                            this.props.history.push('/home');
                        } }
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="社区"
                        key="shequ"
                        icon={
                            <i className='iconfont icon-shequ'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-shequ1'></i>                           
                        }
                        selected={ pathname === '/shequ' }
                        onPress={ () => {
                            this.props.history.push('/shequ')
                        } }
                        data-seed="logId1"
                    ></TabBar.Item>
                    <TabBar.Item
                        title="我的"
                        key="my"
                        icon={
                            <i className='iconfont icon-wode'></i> 
                        }
                        selectedIcon={
                            <i className='iconfont icon-wode1'></i>
                        }
                        selected={ pathname === '/my' }
                        onPress={ () => {
                            this.props.history.push('/my')
                        } }
                        data-seed="logId1"
                    >     
			        </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default withRouter(Mytab)