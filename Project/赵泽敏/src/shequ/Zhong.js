import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTrees } from './actionCreator'
import './css/zhong.css'
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
                    <div id='kuai-username'>{val1.myname}</div>
                    <div id='kuai-time'>恋爱{val1.countday}天</div>
                    <textarea rows='3' id='val1' readonly='readonly'>{val1.content}</textarea>
                    <div id='xianmu'
                    onClick={()=>{
                        props.dispatch({
                            type:'XIANMU',
                            xmlist: val1
                        })                 
                    }}>
                        {
                        props.xmlist.some((xmlist) => {
                            return xmlist.id==val1.id
                        })
                        ? <img src={require('../imgs/aixinsel.png')}></img>
                        : <img src={require('../imgs/xiai.png')}></img>
                        }
                    </div>
                    <div id='xianmu-txt'>{val1.countadmire}羡慕</div>
                    <div id='shoucang'
                    onClick={()=>{
                        props.dispatch({
                            type:'SHOUCANG',
                            sclist: val1
                        })                        
                    }}
                    >
                        {
                        props.sclist.some((sclist) => {
                            return sclist.id==val1.id
                        })
                        ? <img src={require('../imgs/shoucangsel.png')}></img>
                        : <img src={require('../imgs/shoucang.png')}></img>
                        }
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
    list: state.list,
    xmlist: state.xmlist,
    sclist:state.sclist
})
  
export default connect(mapStateToProps)(Zhong);
