import { NavBar, Icon } from 'antd-mobile';
import React from 'react'


class Daka extends React.Component {

    render() {
        return (
                <div>
                  <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                      <Icon key="1" type="ellipsis" />,
                    ]}
                  >1314打卡</NavBar>
              
                </div>
        )
        
    }
}
export default Daka