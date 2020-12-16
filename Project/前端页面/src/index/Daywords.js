import { Popover, NavBar, Icon } from 'antd-mobile';
import React,{useEffect} from 'react'
import './css/daywords.css'
import {getWords} from './actionCreators'
import { connect } from 'react-redux';

class Daywords extends React.Component {
    state = {
      visible: false,
      selected: '',
    };
    onClick = () => {
      this.setState({
        visible: false
      });
    };
    handleVisibleChange = (visible) => {
      this.setState({
        visible,
      });
    };
    componentDidMount() {
      var date = new Date();
      var year = date.getFullYear(); 
      var month = date.getMonth()+1;
      var day = date.getDate();
      let time=year+'.'+month+'.'+day

      this.props.dispatch(getWords(time));
    }
    
  
    render() {
        return (
           <div>
                <Popover mask
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={this.state.visible}
                    
                    overlay={[
                      
                        <div className='text'>
                          <div id='te'>
                                <div id='te-one'>{this.props.centence.title}</div>
                                <div id='te-two'>{this.props.centence.titleenglish}</div>
                                <div id='te-three'>——{this.props.centence.time}——</div>
                                {
                                  String(this.props.centence.content).split(",").map((val)=>(
                                    <div id='te-four'>{val}</div>
                                  ))
                                }
                          </div>
                            <div id='tag'>每日一句</div>
                            <div id='logo'>
                              <img src={require('./imgs/logo.jpg')} />
                            </div>
                        </div>
                    ]}
                    align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-15, 40]
                    }}
                    onVisibleChange={this.handleVisibleChange}
                >
                <div id='nav' onClick={this.handleClickBtn}>每&nbsp;日一&nbsp;句</div>
                </Popover>
          </div>
      );
  }
}

const mapStateToProps = (state) => ({ 
  centence: state.centence
}) 
export default connect(mapStateToProps)(Daywords)