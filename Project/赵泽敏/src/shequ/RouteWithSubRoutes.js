import React from 'react'
import { Redirect, Route } from "react-router-dom";

// function PrivateRoute({ component:Comm, ...rest }) {
// 	return (
// 	  <Route
// 		{...rest}
// 		render={({ location }) =>
// 		   localStorage.getItem('userinfo')
// 		   ?<Comm {...rest}/> 
// 		   : (
// 			<Redirect
// 			  to={{
// 				pathname: "/login",
// 				state: location 
// 			  }}
// 			/>
// 		  )
// 		}
// 	  />
// 	);
// }

function RouteWithSubRoutes(route) {	
		// if(route.pri){
		// 	return <PrivateRoute {...route} />
		// }
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