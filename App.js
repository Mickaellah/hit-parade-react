import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import SongsData from './SongsData';

function App() {
    const [ songs, setSongs ] = useState([]);

    async function getAllSongs() {
        const res = await fetch(SongsData);
        const data = await res.json();
        console.log(data);
        setSongs(data);
    }

    useEffect(() => {
        getAllSongs();
    }, [])

    return (
        <>
            <Header />
            {songs.map((song) => {
                return (
                    <article key={song.id}>
                        <header>
                            <h2>{song.title}</h2>
                            <p>{song.singer}</p>
                        </header>
                        <div>
                            <p>{song.upVotes}</p>
                            <p>{song.downVotes}</p>
                        </div>
                        <p>{song.lyrics}</p>
                    </article>
                )
            })}
        </>
    )
}

export default App