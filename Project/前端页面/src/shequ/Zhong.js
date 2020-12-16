import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMYTrees } from './actionCreator'
import './css/zhong.css'
const Zhong = (props) => {
    useEffect(() => {
        props.dispatch(getMYTrees());        
    }, []);
   let deleteTree = async(id) => {
        let url = '/tree/'+ id;      
        if(window.confirm('确定删除？')){
            await fetch(url,{
                method: 'DELETE',            
            })    
            .then(()=>{
                alert('删除成功');
                props.history.go(0)
            })
        }      
    }
    
    return (
        <div>
            <div id='top1'></div>
            {props.mylist.map((val1) =>(   
                          
                <div key={val1.id} id='kuai'>
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
                            type:'XIANMU',
                            xmlist: val1
                        })                 
                    }}>
                        {
                        props.xmlist.some((xmlist) => {
                            return xmlist.id==val1.id
                        })
                        ? <img src={require('../imgs/aixinsel.png')}></img>
                        : <img src={require('../imgs/xm.png')}></img>
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
                        : <img src={require('../imgs/sc.png')}></img>
                        }
                    </div>
                    <div id='shoucang-txt'>{val1.collect}收藏</div>
                    <div id='pinglun'><img src={require('../imgs/shanchu.png')}
                    onClick = {deleteTree.bind(this,val1.id)}
                    style={{width:'23px',height:'23px'}}
                    /></div>
                    <div id='pinglun-txt'>删除</div>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => ({
    mylist: state.mylist,
    xmlist: state.xmlist,
    sclist:state.sclist
})
  
export default connect(mapStateToProps)(Zhong);
