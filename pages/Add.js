import React, {useContext} from 'react';
import {Context} from '../Context';

export default function Add() {
    const {newSongs, addNewSongs} = useContext(Context);
    return (
        <div>
            <h2>Add a new song</h2>
            <form onSubmit={addNewSongs} className="add_form">
                <div className="input_container">
                    <input id="title" type="text" name="title" placeholder="Title"/>
                    <input id="artist" type="text" name="artist" placeholder="Artist" />
                    <input id="price" type="number" name="price" placeholder="Price" />
                    <select name="style" id="style">
                        <option value="style">Style</option>
                        <option value="rnb">Rnb</option>
                        <option value="slow">Slow</option>
                        <option value="rock">Rock</option>
                        <option value="classic">Classic</option>
                        <option value="jazz">Jazz</option>
                    </select>
                    <textarea id="lyrics" name="lyrics" rows="12" placeholder="Lyrics" />
                </div>
                <div>
                    <button className="add_button" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
