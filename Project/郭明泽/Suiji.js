import React from 'react';
import { render } from 'react-dom';
import Lunbo from './Lunbo'
import Qingdan from './Qingdan'
class Suiji extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Qingdan />
        <Lunbo />
      </div>
    );
  }
}
export default Suiji;