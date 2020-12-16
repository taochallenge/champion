import React from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './index/store';

import Login from './login/Login'

import routes from './router.config'
import { RouteWithSubRoutes } from './shequ/RouteWithSubRoutes';

const App=()=>{
	return <Provider store={store}>
	<Router>
		<Route path="/" exact component={Login} />
		{
			routes.map((route) => (
				<RouteWithSubRoutes  {...route} />
			))
		}
	</Router>
	</Provider>
}

export default App;
