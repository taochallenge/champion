import React from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import {Button,TabBar} from 'antd-mobile';
import Home from './yuta/Home';
import Shequ from './yuta/Shequ'
import My from './yuta/My'


const App=()=>{
	return <Router>
		<Switch>
			<Route exact path='/home' component={Home} />
			<Route path='/shequ' component={Shequ} />
			<Route path='/my' component={My} />
			<Redirect to='/home' />
		</Switch>
	</Router>
}

export default App;