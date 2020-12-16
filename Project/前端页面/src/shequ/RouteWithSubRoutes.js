import React from 'react'
import { Redirect, Route } from "react-router-dom";

function RouteWithSubRoutes(route) {	
		return (
			<Route
			  path={route.path}
			  render={(props) => (				 				
				<route.component {...props} routes={route.routes} />			
			  )}
			/>
		);
	  
}
export {RouteWithSubRoutes};