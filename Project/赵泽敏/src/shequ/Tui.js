import React from 'react'
import { withRouter } from 'react-router-dom'
import './Tui.css'
import { connect } from 'react-redux';
const Tui = (props) => {
    return (       
        <div>           
            <div id='top'></div>
            <div id='bi'
            onClick={ () => {
                props.history.push('/Write');
            } }
            >
                <img src={require('../imgs/bi.png')}/>
            </div>
            {props.list.map((val1) => (             
                <div id='kuai'>
                    <div id='kuai-img'><img src={require('../imgs/19.jpg')}/></div>
                    <div id='kuai-username'>啊啊</div>
                    <div id='kuai-time'>恋爱30天</div>
                    <textarea rows='3' id='val1'>{val1}</textarea>
                    <div id='xianmu'
                    onClick={()=>{
                        props.dispatch({
                            type:'XIANMU',
                            xmlist: val1
                        })
                        document.getElementById('xianmu-img1').src = require('../imgs/aixinsel.png')                   
                    }}
                    >
                        {/* <div id='xianmu-img'></div> */}
                        <img src={require('../imgs/xiai.png')} id='xianmu-img1'/>
                        {/* <img src={require('../imgs/aixinsel.png')} id='xianmu-img'/> */}
                    </div>
                    <div id='xianmu-txt'>6195羡慕</div>
                    <div id='shoucang'
                    className='sc'
                    onClick={()=>{
                        props.dispatch({
                            type:'SHOUCANG',
                            sclist: val1
                        })                        
                    }}
                    >
                        <img src={require('../imgs/shoucang.png')} id='shoucang-img1'/>
                        {/* <img src={require('../imgs/shoucangsel.png')} id='shoucang-img'/> */}
                    </div>
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
  
export default connect(mapStateToProps)(withRouter(Tui));

