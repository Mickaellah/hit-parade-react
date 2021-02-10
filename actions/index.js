import SongData from '../SongsData.json';

export function songLists(songs = SongData) {
    return {
        type: "SONG_LISTS",
        value: songs
    }
}

export function setCartItems(cart) {
    return {
        type: "SET_CART_ITEMS",
        value: cart
    }
}

export function setStyles(styles) {
    return {
        type: "SET_STYLES",
        value: styles
    }
}