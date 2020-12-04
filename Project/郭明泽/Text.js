import React, { Component } from "react";
import * as _ from "lodash";
import './taobao.css'

class DateItem {
  /**
   *
   * @param  dayNum 日数, 如果和 new Date().getDate() 相等则是今天
   * @param  isSignIn=false 是否签到
   * @param  isShowSignIn=false 是否显示是否签到，大于今日和这个月的日期应该都不显示
   */
  constructor({ dayNum, isSignIn = false, isShowSignIn = false }) {
    Object.assign(this, {
      dayNum,
      isSignIn,
      isShowSignIn,
    });
  }
}

const l = console.log;
const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fir", "Sat"];
let count = 0;
class Test extends Component {
  state = {};
  componentWillMount() {
    this.initState();
  }
  initState = ({ y, m } = {}) => {
    const date = new Date();
    const year = y || date.getFullYear(); // 本年
    const month = m || date.getMonth() + 1; // 本月

    l(`${year}年${month}月.`);

    let date2 = new Date(year, month, 0);
    let days = date2.getDate(); // 本月有多少天
    l(`本月有${days}天.`);

    date2.setDate(1);
    let day = date2.getDay(); // 本月第一天是星期几
    l(`本月第一天是星期${day}.`);

    let list = [];
    const nowadays = date.getDate(); // 本日
    const thisMonth = date.getMonth() + 1; // 本月

    let isShowSignIn = false;
    const date2GtDate = date2 > date;
    const isThisMonth = month === thisMonth; // 选择的日期的月份是否是本月

    for (let i = 0; i < days + day; i++) {
      const dayNum = i - day + 1;
      if (date2GtDate) {
        isShowSignIn = false;
      } else {
        if (isThisMonth && i >= day + nowadays) {
          isShowSignIn = false;
        } else {
          isShowSignIn = true;
        }
      }

      if (i < day) {
        list.push(new DateItem({ dayNum: 0, isShowSignIn }));
      } else {
        list.push(new DateItem({ dayNum, isShowSignIn }));
      }
    }
    let hlist = this.getHlist(list, isShowSignIn);
    this.setState({
      date,
      year,
      month,
      days,
      day,
      list,
      hlist,
      nowadays,
      thisMonth,
    });
  };

  // 把一维日期切成二维日期
  getHlist = (list, isShowSignIn) => {
    let hlist = _.chunk(list, 7); // 转化为二维数组
    let len = hlist.length;
    let to = 7 - hlist[len - 1].length;

    // 循环尾部补空格
    for (let i = 0; i < to; i++) {
      hlist[len - 1].push(new DateItem({ dayNum: 0, isShowSignIn }));
    }
    return hlist;
  };

  // 上月
  handlePrevMonth = () => {
    let prevMonth = this.state.month + -1;
    let prevYear = this.state.year;
    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear -= 1;
    }
    this.initState({
      y: prevYear,
      m: prevMonth,
    });
  };

  // 下月
  handleNextMonth = () => {
    let nextMonth = this.state.month + 1;
    let nextYear = this.state.year;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear += 1;
    }
    this.initState({
      y: nextYear,
      m: nextMonth,
    });
  };

  // 点击每个日期
  handleDateItemClick = (dateItem, i, j) => () => {
    const { year, month, date, nowadays } = this.state;
    const { isShowSignIn, isSignIn, dayNum } = dateItem;
    if (dayNum === 0) return;
    const selectDate = new Date(`${year}-${month}-${dayNum}`);
    if (nowadays === dayNum) {
      alert("签到成功");
    } else if (selectDate < date) {
      alert("补签成功");
    }

    if (!isShowSignIn || isSignIn)
      // 不能签到的日期和已签到的日期直接返回
      return;

    this.setState(state => {
      const hlist = state.hlist.slice();
      hlist[i][j].isSignIn = true;
      return {
        hlist,
      };
    });
    this.countt()
  };
  daka = (dateItem, i, j) => (
    this.handleDateItemClick(dateItem, i, j)
  );
  // show () {
  //   console.log(this)
  //   this.setState({
  //   })
  // }
  countt = () => {
    count++
  }


  render() {
    const { year, month, nowadays, thisMonth } = this.state;
    return (
      <div className='daka'>
        <div className='year' style={{ width: '40%', height: '25px',  fontSize: '18px',color:'white'}}>
          {year}年,{month}月
        </div>
        <div>
          <button style={{ width: '15%',height:'25px', display: 'inline-block' ,backgroundColor:'#F88180',border:'0',borderRadius: '3px',color:'white'}} onClick={this.handlePrevMonth}>上月</button>


          <button style={{ width: '15%',height:'25px', display: 'inline-block' ,marginLeft:'30%',backgroundColor:'#F88180',border:'0',borderRadius: '3px',color:'white'}}
            onClick={() => {
              this.initState();
            }}
          >
            今天
          </button>


          <button style={{ width: '15%',height:'25px', display: 'inline-block',marginLeft:'25%',backgroundColor:'#F88180',border:'0',borderRadius: '3px',color:'white'}} onClick={this.handleNextMonth}>下月</button>

        </div>
        <div className='rili' style={{ border: '1px solid red', backgroundColor: 'white', width: '100%', height: '40%' }}>
          <table>
            <tbody>
              <tr>
                {weeks.map(el => (
                  <th key={el}>{el}</th>
                ))}
              </tr>
              {this.state.hlist.map((el, i) => {
                return (
                  <tr key={i}>
                    {el.map((dateItem, j) => {
                      const dayNum = dateItem.dayNum;
                      const isSignIn = dateItem.isSignIn;
                      const isShowSignIn = dateItem.isShowSignIn;
                      return (
                        <td id='btn'

                          key={j}
                          style={{
                            height: '30px',
                            color:
                              dayNum === nowadays && month === thisMonth && "red",
                            textAlign: "center",
                            padding: 7.5,

                            border: "1px solid",
                            borderColor: dateItem.isSignIn
                              ? "blue"
                              : "transparent",
                            opacity: dayNum === 0 ? 0 : 1,
                          }}
                          onClick={
                            this.daka(dateItem, i, j)
                          }
                        >
                          <div>{dayNum}</div>
                          {!!isShowSignIn && (
                            <div
                              style={{
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                              }}
                            >
                              {isSignIn ? `已打卡` : `未打卡`}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>



        <div className='replace'>
          <div className='lianxu'><button className='dk' onClick={() => this.show()}>我要打卡</button></div>
          <div className='continue'><p>已打卡{count}天</p></div>
        </div>

      </div>
    );
  }
}

export default Test;