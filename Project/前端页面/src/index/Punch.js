import React from 'react'
// import img from '../assets/banner.jpg'
import { WingBlank, Carousel } from 'antd-mobile';
import './css/taobao.css'
import Text from './Text'
// import * as _ from "lodash";
import { NavBar, Icon } from 'antd-mobile';

// iconfont.cn官网搜选图标，加入购物车
// 点击页面右上角购物车，将图标添加进项目（没有项目就新建）
// 点击“下载到本地”
// 解压压缩包，全部复制到项目public文件夹下，
// 在index.html中通过link引入iconfont.css
// 使用时，<i className='iconfont icon-具体名字'></i>
class Punch extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                  <NavBar
                    mode="light"
                    icon={<Icon type="left" id='back1'/>}
                    onLeftClick={() => this.props.history.push('/home')}
                    rightContent={[
                      <Icon key="1" type="ellipsis" />,
                    ]}
                  >1314打卡</NavBar>
              
                </div>
                <Text />
                {/* <Qingdan /> */}
                {/* <Suiji /> */}
                
                
            </div>
            
            

        )

    }
    
}

export default Punch;
