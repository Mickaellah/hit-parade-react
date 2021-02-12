import {createStore} from 'redux';
import state from './SongsData.json';
import combineReducers from './reducers/index';
console.log(state);

let store = createStore(combineReducers, state);

export default store;