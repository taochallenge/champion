import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Mytab from '../index/Mytab';
import { getTATrees } from './actionCreator';

const Guan = (props) => {
    useEffect(() => {
        props.dispatch(getTATrees())
    }, []);
    return (
        <div>
            <div id='top'></div>
            {props.talist.map((val1) => (
                <div id='kuai'>
                    <div id='kuai-img'><img src={val1.userimg} /></div>
                    <div id='kuai-username'>{val1.myname}</div>
                    <div id='kuai-time'>热恋ing</div>
                    <textarea rows='2' id='val1' readonly='readonly'>{val1.content}</textarea>
                    {
                        val1.treeimg == null
                            ? ''
                            : <img id='kuai-imgpath' src={val1.treeimg} />
                    }
                    <div id='xianmu'
                        onClick={() => {
                            props.dispatch({
                                type: 'XIANMU',
                                xmlist: val1
                            })
                        }}>
                        {
                            props.xmlist.some((xmlist) => {
                                return xmlist.id == val1.id
                            })
                                ? <img src={require('../imgs/aixinsel.png')}></img>
                                : <img src={require('../imgs/xm.png')}></img>
                        }
                    </div>
                    <div id='xianmu-txt'>{val1.countadmire}羡慕</div>
                    <div id='shoucang'
                        onClick={() => {
                            props.dispatch({
                                type: 'SHOUCANG',
                                sclist: val1
                            })
                        }}
                    >
                        {
                            props.sclist.some((sclist) => {
                                return sclist.id == val1.id
                            })
                                ? <img src={require('../imgs/shoucangsel.png')}></img>
                                : <img src={require('../imgs/sc.png')}></img>
                        }
                    </div>
                    <div id='shoucang-txt'>{val1.collect}收藏</div>
                    <div id='pinglun' onClick={() => {
                        localStorage['treeid'] = val1.id
                        localStorage['src'] = val1.userimg
                        localStorage['name'] = val1.myname
                        localStorage['count'] = val1.countday
                        localStorage['content'] = val1.content
                        localStorage['treeimg'] = val1.treeimg
                        props.history.push({
                            pathname: '/details',
                            // treeid:val1.id,
                            // src: val1.userimg,
                            // name: val1.myname,
                            // count: val1.countday,
                            // content: val1.content,
                            // treeimg: val1.treeimg
                        })
                    }}><img src={require('../imgs/pinglun1.png')} /></div>
                    <div id='pinglun-txt'>评论</div>
                </div>
            ))}
            <Mytab />
        </div>
    )
}
const mapStateToProps = (state) => ({
    talist: state.talist,
    sclist: state.sclist,
    xmlist: state.xmlist,
})

export default connect(mapStateToProps)(Guan);
