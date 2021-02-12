export function toggleFavorite(id) {
    return {
        type: "TOGGLE_FAVORITE",
        value: id
    }
}

export function upVotes(id) {
    return {
        type: "UP_VOTES",
        value: id
    }
}

export function downVotes(id) {
    return {
        type: "DOWN_VOTES",
        value: id
    }
}

export function addNewSongs(song) {
    return {
        type: "ADD_NEW_SONGS",
        value: song
    }
}

export function setCartItems(cart) {
    return {
        type: "SET_CART_ITEMS",
        value: cart
    }
}

export function addToCart(song) {
    return {
        type: "ADD_TO_CARD",
        value: song
    }
}