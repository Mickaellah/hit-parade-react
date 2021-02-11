import React from 'react';
import {useParams} from 'react-router-dom';

import Headset from '../svg/headset-24px.svg';

export default function SongName({songs}) {
    const {styleName} = useParams();
    const songName = songs.filter((song) => song.style.toLowerCase() === styleName.toLowerCase());

    return (
        <div>
            {songName.map(songStyle => {
                return (
                    <div key={songStyle.id}>
                        <div className="style_heading">
                            <img src={Headset} alt="Head set" />
                            <h1 className="style_header">{songStyle.style.toUpperCase()}</h1>
                        </div>
                        <div className='songs'>
                            <h2>{songStyle.title}</h2>
                            <p>{songStyle.singer}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
