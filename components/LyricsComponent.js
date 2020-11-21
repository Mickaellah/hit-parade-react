import React from 'react';

export default function LyricsComponent({item}) {
    return (
        <div>
            <p>
                {item.lyrics}
            </p>
        </div>
    )
}
