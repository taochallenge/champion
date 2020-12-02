import React,{ useEffect }from 'react'
import { withRouter } from 'react-router-dom'
import './Tui.css'
import { connect } from 'react-redux';
import { getTrees, getUsers } from './actionCreator';

const Tui = (props) => {
    useEffect(() => {
        props.dispatch(getTrees());
        props.dispatch(getUsers());
    }, []);
    const selectUser = (uid) => {
        props.ulist.forEach((item) => {
            if(item.id == uid){
                return item.myname 
            }
        })
    }
    
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
                    <div id='kuai-username'>
                        {
                            selectUser(val1.uid)
                        }
                    </div>
                    <div id='kuai-time'>恋爱{val1.countday}天</div>
                    <textarea rows='3' id='val1'>{val1.content}</textarea>
                    <div id='xianmu'
                    onClick={()=>{
                        props.dispatch({
                            type:'XIANMU',
                            xmlist: val1
                        })
                        
                        // document.getElementById('xianmu-img1').src = require('../imgs/aixinsel.png')                   
                    }}
                    
                    >
                        {/* {
                        props.xmlist.some((xmlist) => {
                            return xmlist.id== val1.id
                        })
                        ? <img src={require('../imgs/xiai.png')}></img>
                        : <img src={require('../imgs/aixinsel.png')}></img>
                        } */}
                        <img src={require('../imgs/xiai.png')} id='xianmu-img1'/>
                        {/* <img src={require('../imgs/aixinsel.png')} id='xianmu-img'/> */}
                    </div>
                    <div id='xianmu-txt'>{val1.countadmire}羡慕</div>
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
                    <div id='shoucang-txt'>{val1.collect}收藏</div>
                    <div id='pinglun'><img src={require('../imgs/pinglun.png')}/></div>
                    <div id='pinglun-txt'>6195评论</div>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => ({
    ulist: state.ulist,
    list: state.list
})
  
export default connect(mapStateToProps)(withRouter(Tui));

