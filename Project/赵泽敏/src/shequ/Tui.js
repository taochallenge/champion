import React from 'react'
import { withRouter } from 'react-router-dom'
import './Tui.css'
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
        </div>
    )
}

export default withRouter (Tui)
