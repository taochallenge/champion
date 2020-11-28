import React from 'react'
import { connect } from 'react-redux'
import './zhong.css'
const Zhong = (props) => {
    return (
        <div>
            <div id='top1'></div>
            {props.list.map((val1) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={require('../imgs/19.jpg')}/></div>
                    <div id='kuai-username'>啊啊</div>
                    <div id='kuai-time'>恋爱30天</div>
                    <div id='kuai-qipao'><img src={require('../imgs/gengduo.png')}/></div>
                    <div id='val1'>{val1}</div>
                    <div id='xianmu'><img src={require('../imgs/xiai.png')}/></div>
                    <div id='xianmu-txt'>6195羡慕</div>
                    <div id='pinglun'><img src={require('../imgs/pinglun.png')}/></div>
                    <div id='pinglun-txt'>6195评论</div>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => ({
    list: state.list,
})
  
export default connect(mapStateToProps)(Zhong);
