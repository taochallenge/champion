import React from 'react'
import { connect } from 'react-redux';
const Shou = (props) => {
    return (
        <div>
            <div id='top1'></div>
            {props.sclist.map((val1,index) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={require('../imgs/19.jpg')}/></div>
                    <div id='kuai-username'>{val1.myname}</div>
                    <div id='kuai-time'>恋爱{val1.countday}天</div>
                    <textarea rows='3' id='val1'>{val1.content}</textarea>
                    <div id='xianmu'><img src={require('../imgs/xiai.png')}/></div>
                    <div id='xianmu-txt'>{val1.countadmire}羡慕</div>
                    <div id='shoucang'
                        onClick={()=>{
                            props.dispatch({
                                type:'DELSHOUCANG',
                                index: index
                            })                 
                        }}  
                    >
                        <img src={require('../imgs/shoucangsel.png')}/>
                    </div>
                    
                    <div id='shoucang-txt'>{val1.collect}收藏</div>
                    <div id='pinglun'><img src={require('../imgs/pinglun.png')}/></div>
                    <div id='pinglun-txt'>11评论</div>
                </div>
            ))}
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    sclist: state.sclist
})
  
export default connect(mapStateToProps)(Shou);