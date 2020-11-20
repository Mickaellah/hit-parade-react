import React from 'react'

export default function Add() {
    return (
        <div>
            <h2>Add a new song</h2>
            <form className="add_form">
                <div className="input_container">
                    <input id="title" placeholder="Title" required/>
                    <input id="artist" placeholder="Artist" required />
                    <input id="price" placeholder="Price" required />
                    <select id="style">
                        <option value="style">Style</option>
                        <option value="rnb">Rnb</option>
                        <option value="slow">Slow</option>
                        <option value="rock">Rock</option>
                        <option value="classic">Classic</option>
                        <option value="jazz">Jazz</option>
                    </select>
                    <textarea id="lyrics" rows="12" placeholder="Lyrics" required />
                </div>
                <div>
                    <button className="add_button" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
