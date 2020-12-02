import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import userslist from '../Reduders/usersReducer';
import centencelist from '../Reduders/centenceReducer';
import diarylist from '../Reduders/diaryReducer';
import littlelist from '../Reduders/littleReducer';
import memorylist from '../Reduders/memoryReducer';
import treelist from '../Reduders/treeReducer';


let rootReducer = combineReducers({
    userslist,centencelist,diarylist,littlelist,memorylist,treelist
})

const thunk = ({ dispatch, getState }) => (next) => (action) => {
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