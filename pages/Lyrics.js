import React, {useContext} from 'react'
import {Context} from '../Context';

import {useParams} from 'react-router-dom';

export default function Lyrics() {
    const {songId} = useParams();
    const {songs} = useContext(Context);
    const songLyrics = songs.find(song => song.id == songId);
    console.log(songLyrics);
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
