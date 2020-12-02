import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Shequ from './shequ/Shequ'
import User from './shequ/User';
import {RouteWithSubRoutes} from './shequ/RouteWithSubRoutes';
import routes from './shequ/router.config';
import Tui from './shequ/Tui';
import Guan from './shequ/Guan';
import { Provider } from 'react-redux';
import store from './shequ/store';
const App = ()=>{
	return <Provider store={store}>
	<Router>
		<Switch>
		{
			routes.map((route) => (
				<RouteWithSubRoutes  {...route} />
			))
		}
		</Switch>
	</Router>
	</Provider>
}

export default App;
