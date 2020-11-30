import React from 'react'
import { connect } from 'react-redux';

const Guan = (props) => {
    return (
        <div>
            <div id='top'></div>
            {props.sclist.map((val1) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={require('../imgs/19.jpg')}/></div>
                    <div id='kuai-username'>啊啊</div>
                    <div id='kuai-time'>恋爱30天</div>
                    <textarea rows='3' id='val1'>{val1}</textarea>
                    <div id='xianmu'><img src={require('../imgs/xiai.png')}/></div>
                    <div id='xianmu-txt'>6195羡慕</div>
                    <div id='shoucang'><img src={require('../imgs/shoucang.png')}/></div>
                    <div id='shoucang-txt'>6195收藏</div>
                    <div id='pinglun'><img src={require('../imgs/pinglun.png')}/></div>
                    <div id='pinglun-txt'>6195评论</div>
                </div>
            ))}
            {props.xmlist.map((val1) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={require('../imgs/19.jpg')}/></div>
                    <div id='kuai-username'>啊啊</div>
                    <div id='kuai-time'>恋爱30天</div>
                    <textarea rows='3' id='val1'>{val1}</textarea>
                    <div id='xianmu'><img src={require('../imgs/xiai.png')}/></div>
                    <div id='xianmu-txt'>6195羡慕</div>
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
    sclist: state.sclist,
    xmlist: state.xmlist,
})
  
export default connect(mapStateToProps)(Guan);
