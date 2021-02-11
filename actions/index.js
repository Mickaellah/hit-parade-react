import SongData from '../SongsData.json';

export function songLists() {
    return {
        type: "SONG_LISTS",
        value: SongData
    }
}

export function setCartItems(cart) {
    return {
        type: "SET_CART_ITEMS",
        value: cart
    }
}