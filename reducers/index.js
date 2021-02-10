import {combineReducers} from 'redux';
import state from '../state';

function getSongs(songs = [], action) {
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

function getStyles(styles = [
    "Pop",
    "Rock",
    "Jazz",
    "Classic",
    "Dance"
], action) {
    switch(action.type) {
        case "SET_STYLES":
            return [...styles, action.value]
        default:
            return styles
    }
}

export default combineReducers({
    getSongs,
    cartItems,
    getStyles
});