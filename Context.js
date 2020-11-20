import React, {useState, useEffect} from 'react';
import SongData from './SongsData.json';

const Context = React.createContext();

function ContextProvider(props) {
    const [ songs, setSongs ] = useState([]);

    useEffect(() => {
        setSongs(SongData);
    }, [])

    return (
        <Context.Provider value={{songs}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};