import React, {useState, useEffect} from 'react';
import SongData from './SongsData.json';

const Context = React.createContext();

function ContextProvider(props) {
    const [ songs, setSongs ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [ count, setCount ] = useState(0);
    const [ lyrics, setLyrics ] = useState({});

    useEffect(() => {
        setSongs(SongData);
    }, [])

    function upVotesIncreament(e) {
        const id = e.target.id;
        const findId = songs.find(item => item.id === id);
        const upVotes = findId.upVotes++;
        setCount(upVotes);
    }

    function downVotesIncreament(e) {
        const id = e.target.id;
        const findId = songs.find(item => item.id === id);
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
        console.log(cartItems);
    }

    function getSongLyrics(songLyrics) {
        setLyrics({...lyrics, songLyrics});
    }

    const sortedSong = songs.sort((songX, songY) => {
        const ratioX = songX.upVotes - songX.downVotes;
        const ratioY = songY.upVotes - songY.downVotes;
        return ratioY - ratioX;
    });

    return (
        <Context.Provider value={{songs, sortedSong, cartItems, addToCart, upVotesIncreament, downVotesIncreament, toggleFavorite, getSongLyrics}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};