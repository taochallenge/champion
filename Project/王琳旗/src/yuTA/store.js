import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import users from '../Reduders/usersReducer';;

let rootReducer = combineReducers({
    users
})

function logger({getState}){
    return (next)=>(action)=>{
        console.log('will dispatch',action)
        //调用middleware链中下一个middleware的dispatch
        let returnvalue=next(action)
        console.log('state after dispatch',getState())
        //一般会是action本身，除非后面的middleware修改了他
        return returnvalue
    }
}

const thunk = ({ dispatch, getState }) => (next) => (action) => {
    console.log(thunk);
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk))
);

export default store;