import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Mytab from './mytab/Mytab';
import Shequ from './shequ/Shequ'
import User from './shequ/User';
import {RouteWithSubRoutes} from './shequ/RouteWithSubRoutes';
import routes from './shequ/router.config';
import Tui from './shequ/Tui';
import Guan from './shequ/Guan';
const App = ()=>{
	return <Router>
		<Switch>
		{
			routes.map((route) => (
				<RouteWithSubRoutes  {...route} />
			))
		}
		</Switch>
		{/* <Mytab/> */}
	</Router>
}

export default App;
