import React, { Component } from 'react';
import './css/privacy.css';

export default class privacy extends Component {

    render() {

        return (
            <div className="cus-all">

                <div className="custitle">
                    <div className="ter" onClick={() => this.props.history.push('/set')}></div>遇TA隐私政策协议
                </div>
                <div className="priva">
                    <h3>隐私协议内容如下：</h3>
                    <div className="pri">     遇TA项目组深知个人信息对您的重要性，并会尽力保护您的个人信息安全可靠，我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息:权责-致原则，目的明确原则，选择同意原则，最少够用原则，确保安全原则，主体参与原则，公开透明原则等等。
                        同时我们承诺，我们将按业界成熟的安全解决方案，采取相应的安全保护措施来保护您的个人信息。
                    </div>
                    <div className="pri">    本政策适用于武汉滴滴网络科技有限公司产品或服务。如我们关联公司的产品或服务中使用了武汉滴滴网络科技有限公司提供的产品或服务，但未设独立隐私权政策的，则本政策同样适用于该部分产品或服务。</div>

                    <div className="pri">   需要特别说明的是，本政策不适用于其他第三方向您提供的服务，也不适用于武汉滴滴网络科技有限公司中已另行独立设置隐私权政策的产品或服务。</div>
                    
                </div>
            </div>
        );
    }
}



