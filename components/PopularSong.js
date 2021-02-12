import React from 'react';
import {Link} from 'react-router-dom';

import favoriteOutline from '../svg/favorite_border-24px.svg';
import favorite from '../svg/favorite-24px.svg';
import shoppingCartOutline from "../svg/shopping_cart-24px (1).svg";
import shoppingCart from "../svg/shopping_cart-24px.svg";
import arrowUp from "../svg/arrow_upward-24px.svg";
import downArrow from "../svg/arrow_downward-24px.svg";
import lyrics from '../svg/lyrics.svg';

export default function PopularSong({songs, toggleFavorite, updateVotes}) {
    const sortedSong = songs.sort((songX, songY) => {
        const ratioX = songX.upVotes - songX.downVotes;
        const ratioY = songY.upVotes - songY.downVotes;
        return ratioY - ratioX;
    });
    
    return (
        <main>
            {sortedSong.map((song) => {
                return (
                    <article key={song.id} className="song_cart">
                        <div>
                            {
                                song.isFavorited === true 
                                ? <img onClick={() => toggleFavorite(song.id)} src={favorite} alt="favorited"/>
                                : <img onClick={() => toggleFavorite(song.id)} src={favoriteOutline} alt="not favorited" />
                            }
                        </div>
                        <header className="header">
                            <h2 className="heading">{song.title}</h2>
                            <p>{song.singer}</p>
                        </header>
                        <div className="voting">
                            <div className="up_votes">
                                <span>{song.upVotes}</span>
                                <button 
                                    className="upVotes_bttn" 
                                    id={song.id} 
                                    onClick={(e) => updateVotes(e)}
                                >
                                    <img 
                                        id={song.id} 
                                        className="up_votes_icon" 
                                        src={arrowUp} 
                                        alt="Upvotes" 
                                    />
                                </button>
                            </div>
                            <div className="down_votes">
                                <span>{song.downVotes}</span>
                                <button 
                                    className="downVotes_bttn" 
                                    onClick={(e) => updateVotes(e)} 
                                    id={song.id}
                                >
                                    <img 
                                        id={song.id} 
                                        className="down_votes_icon" 
                                        src={downArrow} 
                                        alt="Downvotes" 
                                    />
                                </button>
                            </div>
                        </div>
                        <div>
                            <Link to="/cart">
                            {/* onClick={() => addToCart(song)} */}
                                <img  src={shoppingCartOutline} alt="shopping cart" />
                            </Link>
                        </div>
                        <div>
                            <Link to={`/song/${song.id}`}>
                                <img src={lyrics} alt="song lyrics" />
                            </Link>
                        </div>
                    </article>
                )
            })}
        </main>
    )
}
