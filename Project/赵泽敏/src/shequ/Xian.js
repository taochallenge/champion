import React from 'react'
import { connect } from 'react-redux';

const Xian = (props) => {
    return (
        <div>
            <div id='top1'></div>

            {props.xmlist.map((val1,index) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={require('../imgs/19.jpg')}/></div>
                    <div id='kuai-username'>{val1.myname}</div>
                    <div id='kuai-time'>恋爱{val1.countday}天</div>
                    <textarea rows='3' id='val1' readonly='readonly'>{val1.content}</textarea>
                    <div id='xianmu'
                    onClick={()=>{
                        props.dispatch({
                            type:'DELXIANMU',
                            index: index
                        })                 
                    }}>
                        <img src={require('../imgs/aixinsel.png')}></img>  
                    </div>
                    <div id='xianmu-txt'>{val1.countadmire}羡慕</div>
                    <div id='shoucang'><img src={require('../imgs/shoucang.png')}/></div>
                    <div id='shoucang-txt'>{val1.collect}收藏</div>
                    <div id='pinglun'><img src={require('../imgs/pinglun.png')}/></div>
                    <div id='pinglun-txt'>11评论</div>
                </div>
            ))}
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    xmlist: state.xmlist,
})
  
export default connect(mapStateToProps)(Xian);
