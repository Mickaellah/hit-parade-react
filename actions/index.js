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

export function updateVotes() {
    return {
        type: "UPDATE_VOTES"
    }
}

export function addNewSongs(e) {
    e.preventDefault();
    const {title, artist, style, lyrics, price} = e.target;

    const newSong = {
        title: title.value,
        singer: artist.value,
        style: style.value,
        isFavorited: false,
        upVotes: 0,
        downVotes: 0,
        price: price.value + ' ' + 'Ar',
        lyrics: lyrics.value,
        id: Date.now()
    }
    console.log(newSong);
    return {
        type: "ADD_NEW_SONGS",
        value: newSong
    }
}

export function setCartItems(cart) {
    return {
        type: "SET_CART_ITEMS",
        value: cart
    }
}