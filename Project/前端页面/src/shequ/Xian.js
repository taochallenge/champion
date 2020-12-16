import React from 'react'
import { connect } from 'react-redux';

const Xian = (props) => {
    return (
        <div>
            <div id='top1'></div>

            {props.xmlist.map((val1,index) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={val1.userimg}/></div>
                    <div id='kuai-username'>{val1.myname}</div>
                    <div id='kuai-time'>热恋ing</div>
                    <textarea rows='2' id='val1' readonly='readonly'>{val1.content}</textarea>
                    {
                        val1.treeimg==null
                        ?''
                        :<img id='kuai-imgpath' src={val1.treeimg} />
                    } 
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
                    <div id='shoucang'><img src={require('../imgs/sc.png')}/></div>
                    <div id='shoucang-txt'>{val1.collect}收藏</div>
                    <div id='pinglun'><img src={require('../imgs/pinglun1.png')}/></div>
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
