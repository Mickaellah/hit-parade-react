import {combineReducers} from 'redux';
import state from '../state';
import SongData from '../SongsData.json';

function songs(state = SongData, action) {
    switch(action.type) {
        case "TOGGLE_FAVORITE":
            return state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        isFavorited: !song.isFavorited,
                    };
                }
                return song;
            });
        case "UP_VOTES":
            return state.map(song => {
            if (song.id === action.value) {
                return {
                    ...song,
                    upVotes: song.upVotes + 1,
                };
            }
            return song
        })
        case "DOWN_VOTES":
            
            return state.map(song => {
                    if (song.id === action.value) {
                        return {
                            ...song,
                            downVotes: song.downVotes + 1
                        };
                    }
                    return song
                })

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

function cartItems(state = [], action) {
    switch(action.type) {
        case "SET_CART_ITEMS":
            return [...state, action.value]
        case "ADD_TO_CARD":
            return [...state, action.value]
        default:
            return state
    }
}


export default combineReducers({
    songs,
    cartItems,
    newSongs,
});