import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addNewSongs} from '../actions';

function Add({addNewSongs}) {
    const [title, setTitle] = useState("");
    const [singer, setSinger] = useState("");
    const [price, setPrice] = useState(0);
    const [style, setStyle] = useState("");
    const [lyrics, setLyrics] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newSong = {
            id: Date.now(),
            title: e.target.title.value,
            singer: e.target.artist.value,
            price: e.target.price.value,
            style: e.target.style.value,
            lyrics: e.target.lyrics.value,
            upVotes: 0,
            downVotes: 0,
            isFavorited: false,
        };
        addNewSongs(newSong);
    setTitle("");
    setSinger("");
    setPrice(0);
    setStyle("");
    setLyrics("");
    }
    return (
        <div>
            <h2>Add a new song</h2>
            <form onSubmit={handleSubmit} className="add_form">
                <div className="input_container">
                    <input id="title" type="text" name="title" placeholder="Title" required/>
                    <input id="artist" type="text" name="artist" placeholder="Artist" required />
                    <input id="price" type="number" name="price" placeholder="Price" required />
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

const mapDispatchToProps = {
    addNewSongs,
}

export default connect((state) => ({songs: state.songs}), mapDispatchToProps) (Add);
