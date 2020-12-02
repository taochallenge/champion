import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import routes from './yuTA/router';
import store from './yuTA/store';
import { Provider } from 'react-redux';

function RouteWithSubRoutes(route) {
	return (
	  <Route
		path={route.path}
		render={props => (
		  <route.component {...props} 
		   routes={route.routes}
		  />
		)}
	  />
	);
}
const App =()=>{
	return <Provider store={store}>
		<Router>
			<Switch>
			{
				routes.map((route) => (
					<RouteWithSubRoutes {...route}/>
		  		))
			}
			</Switch>
		</Router> 
	</Provider>
}

export {App,RouteWithSubRoutes};