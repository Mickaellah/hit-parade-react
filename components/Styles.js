import React, {useContext} from 'react'
import {Link} from 'react-router-dom';

import Headset from '../svg/headset-24px.svg';

export default function Styles({songs}) {
    return (
        <div>
            {songs.map(song => {
                return (
                    <Link key={song.id} to={`/styles/${song.style}`}>
                        <div className="styles">
                            <img src={Headset} alt="Head set" />
                            <h2 className="styles_heading">{song.style}</h2>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
