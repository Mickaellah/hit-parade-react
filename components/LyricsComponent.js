import React, {useContext} from 'react';
import {Context} from '../Context';

export default function LyricsComponent() {
    const context = useContext(Context);
    const lsSong = context.songs;
    return (
        <div>
            {lsSong.map(song => {
                return (
                    <div key={song.id}>
                        <p>{song.lyrics}</p>
                    </div>
                )
            })}
        </div>
    )
}
