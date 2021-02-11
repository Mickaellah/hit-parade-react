import React, {useContext} from 'react'

import {useParams} from 'react-router-dom';

export default function Lyrics({songs}) {
    const {songId} = useParams();
    const songLyrics = songs.find(song => song.id == songId);

    return (
        <div>
            <h2>{songLyrics.singer}: {songLyrics.title}</h2>
            <div className="lyrics_container">
                <h3>Lyrics</h3>
                <p>{songLyrics.lyrics}</p>
            </div>
        </div>
    )
}
