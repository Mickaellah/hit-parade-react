import {combineReducers} from 'redux';
import state from '../state';
import SongData from '../SongsData.json';

function songs(state = [], action) {
    switch(action.type) {
        case "SONG_LISTS":
            return [...state, action.value]
        default:
            return state
    }
}

function updateFavorite(songs = [], action) {
    switch(action.types) {
        case "TOGGLE_FAVORITE":
            const newSongArray = songs.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        isFavorited: !song.isFavorited,
                    };
                }
                return song;
            });
            return newSongArray
        default:
            return songs
    }
}


function upvotes(state = 0, action) {
    switch(action.type) {
        case "UPDATE_VOTES":
            const updateUpVotes = SongData.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        upVotes: song.upVotes + 1
                    }
            }})
            return updateUpVotes
        default:
            return state
    }
}

function newSongs(state = [], action) {
    switch(action.type) {
        case "ADD_NEW_SONGS":
            return [...state, action.value]
        default:
            return state
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
    songs,
    cartItems,
    updateFavorite,
    newSongs,
    upvotes
});