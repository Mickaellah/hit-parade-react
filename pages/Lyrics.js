import React, {useContext} from 'react'
import {Context} from '../Context';

import LyricsComponent from '../components/LyricsComponent';

export default function Lyrics() {
    const {lyrics} = useContext(Context);
    const songLyrics = lyrics.map(item => (
        <LyricsComponent key={item.id} item={item} />
    ))
    return (
        <div>
            {songLyrics}
        </div>
    )
}
