import {createStore} from 'redux';
import state from './state';
import combineReducers from './reducers/index';

let store = createStore(combineReducers, state);

export default store;