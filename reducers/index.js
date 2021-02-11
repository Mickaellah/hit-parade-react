import {combineReducers} from 'redux';
import state from '../state';
import SongData from '../SongsData.json';

function getSongs(songs = [...SongData], action) {
    switch(action.type) {
        case "SONG_LISTS":
            return [...state, action.value]
        default:
            return songs
    }
}

function cartItems(cart = [], action) {
    switch(action.type) {
        case "SET_CART_ITEMS":
            return [...cart, action.value]
        default:
            return cart
    }
}


export default combineReducers({
    getSongs,
    cartItems
});