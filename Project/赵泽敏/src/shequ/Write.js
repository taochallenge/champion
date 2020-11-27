import React from 'react'
import './write.css'
const Write = (props) => {
    return (
        <div id='all2'>
            <div id='nav2'>
                <div id='da1'>
                    <img
                        src={require('../imgs/jiantou1.png')}
                        onClick={ () => {
                            props.history.push('/Shequ');
                        } }
                    />
                </div>
                <div id='text1'>种棵树</div>
                <div id='text2'>发布</div>
                
            </div>
            <div id='line1'></div>
            <div id='body'>
                <div id='textarea'>
                    <textarea rows='32' cols='40' placeholder='输入你此刻最想分享的内容……'>

                    </textarea>
                </div>
                <div id='body-xia'>
                    <div id='biaoqing'>
                        <img src={require('../imgs/weixiao.png')}/>
                    </div>
                    <div id='tupian'>
                        <img src={require('../imgs/tupian.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
