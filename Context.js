import React, {useState, useEffect} from 'react';
import SongData from './SongsData.json';

const Context = React.createContext();

function ContextProvider(props) {
    const [ songs, setSongs ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [ count, setCount ] = useState(0);
    const [ newSongs, setNewSongs ] = useState('');

    useEffect(() => {
        setSongs(SongData);
    }, [])

    function upVotesIncreament(e) {
        const id = e.target.id;
        const findId = songs.find(item => item.id == id);
        const upVotes = findId.upVotes++;
        setCount(upVotes);
    }

    function downVotesIncreament(e) {
        const id = e.target.id;
        const findId = songs.find(item => item.id == id);
        const downVotes = findId.downVotes++;
        setCount(downVotes);
    }

    function toggleFavorite(id) {
        const newSongArray = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    isFavorited: !song.isFavorited,
                };
            }
            return song;
        });
        setSongs(newSongArray);
    }

    function addToCart(song) {
        setCartItems(prevItems => [...prevItems, song]);
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        console.log('I am deleted');
    }

    const addNewSongs = (e) => {
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

        setSongs([...songs, newSong]);
    }

    const sortedSong = songs.sort((songX, songY) => {
        const ratioX = songX.upVotes - songX.downVotes;
        const ratioY = songY.upVotes - songY.downVotes;
        return ratioY - ratioX;
    });

    return (
        <Context.Provider value={{
            songs,
            sortedSong,
            cartItems,
            addToCart,
            upVotesIncreament,
            downVotesIncreament,
            toggleFavorite,
            removeFromCart,
            addNewSongs,
            newSongs}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};