import React, {useContext} from 'react'

import {Context} from '../Context';
import Headset from '../svg/headset-24px.svg';
export default function Styles() {
    const context = useContext(Context);
    return (
        <div>
            {context.songs.map((song) => {
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
