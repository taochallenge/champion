import React from 'react';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import {RouteWithSubRoutes} from './shequ/RouteWithSubRoutes';
import routes from './shequ/router.config';
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
