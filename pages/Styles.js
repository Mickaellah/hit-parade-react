import React from 'react'

import Headset from '../svg/headset-24px.svg';
export default function Styles() {
    return (
        <div>
            <div className="styles">
                <img src={Headset} alt="Head set" />
                <h2 className="styles_heading">Slow</h2>
            </div>
            <div className="styles">
                <img src={Headset} alt="Head set" />
                <h2 className="styles_heading">Classic</h2>
            </div>
            <div className="styles">
                <img src={Headset} alt="Head set" />
                <h2 className="styles_heading">Jazz</h2>
            </div>
            <div className="styles">
                <img src={Headset} alt="Head set" />
                <h2 className="styles_heading">Rock</h2>
            </div>
            <div className="styles">
                <img src={Headset} alt="Head set" />
                <h2 className="styles_heading">Rnb</h2>
            </div>
        </div>
    )
}
