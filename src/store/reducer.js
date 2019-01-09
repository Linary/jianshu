import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';

// redux提供一个函数：combineReducers，把小的reducer合并成大的reducer。
const reducer = combineReducers({
    header: headerReducer
});

export default reducer;
