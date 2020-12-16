import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import rjlist from './reducers/rijireducer'
import little from './reducers/getlittlereducer'
import alllist from '../shequ/reducers/datasreducer';
import sclist from '../shequ/reducers/shoucangreducer';
import xmlist from '../shequ/reducers/xianmureducer';
import ulist from '../shequ/reducers/usersreducer';
import mylist from '../shequ/reducers/getmydatareducers';
import talist from '../shequ/reducers/gettadatareducer';
import contentlist from '../shequ/reducers/getContentreducer';
import centence from './reducers/getwordsreducer'
import memory from './reducers/jinianreducer'
let rootReducer = combineReducers({
    rjlist,little,alllist,sclist,xmlist,ulist,centence,mylist,talist,memory,contentlist
})

function logger({ getState }) {
    return (next) => (action) => {
        console.log('will dispatch', action)
        // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)
        console.log('state after dispatch', getState())
        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。
        return returnValue
    }
}
const thunk = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware( thunk)
    )
);

export default store;