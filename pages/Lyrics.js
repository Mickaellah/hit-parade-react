import React, {useContext} from 'react'
import {Context} from '../Context';

import LyricsComponent from '../components/LyricsComponent';

export default function Lyrics() {
    const {getSongLyrics} = useContext(Context);
    return (
        <div>
            <LyricsComponent songLyrics={}/>
        </div>
    )
}
