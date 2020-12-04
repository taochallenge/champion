import React from 'react';
import { Provider } from 'react-redux'
import { HashRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import Home from './Home';
import store from './store';
import Couple from './Couple';
import Lunbo from './Lunbo';
import Search from './Search';
// https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg
const App = () => {
	return <Provider store={store}>
		<Router>
			<Switch>
				{/* <Route exact path='/' component={Home} />
				<Route path='/cart' component={Cart} />
				<Route path='/shop' render={(props) => <Shop {...props} />} />
				
				<Route path='/dingdan' component={Dingdan} />
				<Route path='/my' component={My} />
				<Route path='/login' component={Login} />
				<Route render={() => <Redirect to='/' />} /> */}
				<Route exact path='/' component={Home} />
				<Route path='/lunbo' component={Lunbo} />
				<Route path='/couple' component={Couple} />
				<Route path='/search' component={Search} />
			</Switch>
			{/* <Mytab /> */}
		</Router>
	</Provider>

}
export default App;