import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTrees } from './actionCreator'
import './zhong.css'
const Zhong = (props) => {
    useEffect(() => {
        props.dispatch(getTrees());
    }, []);
    return (
        <div>
            <div id='top1'></div>
            {props.list.map((val1) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={require('../imgs/19.jpg')}/></div>
                    <div id='kuai-username'>啊啊</div>
                    <div id='kuai-time'>恋爱{val1.countday}天</div>
                    <textarea rows='3' id='val1'>{val1.content}</textarea>
                    <div id='xianmu'><img src={require('../imgs/xiai.png')}/></div>
                    <div id='xianmu-txt'>{val1.countadmire}羡慕</div>
                    <div id='shoucang'><img src={require('../imgs/shoucang.png')}/></div>
                    <div id='shoucang-txt'>6195收藏</div>
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
