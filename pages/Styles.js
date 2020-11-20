import React from 'react'

import songs from '../SongsData.json';
import Headset from '../svg/headset-24px.svg';
export default function Styles() {
    return (
        <div>
            {songs.map((song) => {
                return (
                    <header className="styles" key={song.id}>
                        <img src={Headset} alt="Head set" />
                        <h2 className="styles_heading">{song.style}</h2>
                    </header>
                )
            } )}
        </div>
    )
}
