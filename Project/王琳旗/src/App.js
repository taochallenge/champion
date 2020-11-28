import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import routes from './yuTA/router';

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
	return <Router>
		<Switch>
		{
			routes.map((route) => (
				<RouteWithSubRoutes {...route}/>
		  	))
		}
		</Switch>
	</Router>
}

export {App,RouteWithSubRoutes};