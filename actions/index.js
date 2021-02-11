import SongData from '../SongsData.json';

export function songLists() {
    return {
        type: "SONG_LISTS",
        value: SongData
    }
}

export function toggleFavorite(id) {
    return {
        type: "TOGGLE_FAVORITE",
        value: id
    }
}

export function increase() {
    return {
        type: "INCREASE"
    }
}

export function decrease() {
    return {
        type: "DECREASE"
    }
}

export function setCartItems(cart) {
    return {
        type: "SET_CART_ITEMS",
        value: cart
    }
}