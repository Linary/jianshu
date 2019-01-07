import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

// 允许外层间接引入reducer
export { reducer, actionCreators, constants };