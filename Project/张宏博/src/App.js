import React from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import {Button,TabBar} from 'antd-mobile';
import Home from './yuta/Home'
import Shequ from './yuta/Shequ'
import My from './yuta/My'
import Daywords from './yuta/Daywords'
import Jinian from './yuta/Jinian'
import Create from './yuta/Create'
import Riji from './yuta/Riji'
import Createriji from './yuta/Createriji'
import { Provider } from 'react-redux';
import store from './yuta/store';

const App=()=>{
	return <Provider store={store}>
	<Router>
		<Switch>
			<Route exact path='/home' component={Home} />
			<Route path='/shequ' component={Shequ} />
			<Route path='/my' component={My} />
			<Route path='/daywords' component={Daywords} />
			<Route path='/jinian' component={Jinian} />
			<Route path='/create' component={Create} />
			<Route path='/riji' component={Riji} />
			<Route path='/createriji' component={Createriji} />
			<Redirect to='/home' />
		</Switch>
	</Router>
	</Provider>
}

export default App;