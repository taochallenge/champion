import { NavBar, Icon } from 'antd-mobile';
import React from 'react'


class Qingdan extends React.Component {

    render() {
        return (
                <div>
                  <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                      <Icon key="1" type="ellipsis" />,
                    ]}
                  >恋人清单</NavBar>
              
                </div>
        )
        
    }
}
export default Qingdan