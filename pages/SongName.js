import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Context} from '../Context';

import Headset from '../svg/headset-24px.svg';

export default function SongName() {
    const {styleName} = useParams();
    const {songs} = useContext(Context);
    const songName = songs.filter((song) => song.style.toLowerCase() === styleName.toLowerCase());

    console.log(styleName);

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
