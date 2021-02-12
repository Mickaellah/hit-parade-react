import {createStore} from 'redux';
import state from './SongsData.json';
import combineReducers from './reducers/index';

let store = createStore(combineReducers, state);

export default store;