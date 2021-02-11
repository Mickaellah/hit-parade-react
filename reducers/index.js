import {combineReducers} from 'redux';
import state from '../state';
import SongData from '../SongsData.json';

function getSongs(songs = SongData, action) {
    switch(action.type) {
        case "SONG_LISTS":
            return [...state, action.value]
        default:
            return songs
    }
}

function updateFavorite(songs = SongData, action) {
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

function votes(state= 0, action) {
    switch(action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state + 1;
        default:
            return state
    }
}

// function upvotes(state = 0, action, e) {
//     switch(action.type) {
//         case "INCREASE":
//             const id = e.target.id;
//             const findId = [...state.find(song => song.id == id)];
//             return findId.upVotes + 1;
//         default:
//             return state
//     }
// }

// function downvotes(state = [...SongData], action, e) {
//     switch(action.type) {
//         case "DECREASE":
//             const id = e.target.id;
//             const findId = [...state.find(song => song.id == id)];
//             return findId.downVotes + 1;
//         default:
//             return state
//     }
// }

function newSongs(state = SongData, action) {
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
    getSongs,
    cartItems,
    updateFavorite,
    votes,
    newSongs
    // upvotes,
    // downvotes
});