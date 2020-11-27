import store from './taobao/store';
import { Provider } from 'react-redux';
import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Login from './yuTA/login';
import Diary from './yuTA/diary';
import Users from './yuTA/users';
import Admire from './yuTA/admire';
import Centence from './yuTA/centence';
import Chatting from './yuTA/chatting';
import Collection from './yuTA/collection';
import Little from './yuTA/little';
import Memory from './yuTA/memory';
import Punch from './yuTA/punch';
import Tree from './yuTA/tree';

const App =()=>{
	return <Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/users' component={Users} />
				<Route path='/diary' component={Diary} />
				<Route path='/admire' component={Admire} />
				<Route path='/centence' component={Centence} />
				<Route path='/chatting' component={Chatting} />
				<Route path='/collection' component={Collection} />
				<Route path='/little' component={Little} />
				<Route path='/memory' component={Memory} />
				<Route path='/punch' component={Punch} />
				<Route path='/tree' component={Tree} />
			</Switch>
		</Router> 
	</Provider>
}

export default App;