import React from 'react'
import img from '../assets/banner.jpg'
import { WingBlank, Carousel } from 'antd-mobile';
import './taobao.css'
import Lunbo from './Lunbo'
import Text from './Text'
import * as _ from "lodash";
import Daka from './Daka'
import Qingdan from './Qingdan'
import Suiji from './Suiji'
// iconfont.cn官网搜选图标，加入购物车
// 点击页面右上角购物车，将图标添加进项目（没有项目就新建）
// 点击“下载到本地”
// 解压压缩包，全部复制到项目public文件夹下，
// 在index.html中通过link引入iconfont.css
// 使用时，<i className='iconfont icon-具体名字'></i>
class Home extends React.Component {

    render() {
        return (
            <div>
                <Daka />
                <Text />
                {/* <Qingdan /> */}
                {/* <Suiji /> */}
                
                
            </div>
            
            

        )

    }
    
}

export default Home;
