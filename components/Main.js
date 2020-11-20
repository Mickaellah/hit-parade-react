import React from 'react';

import songs from '../SongsData.json';
import Header from '../components/Header';

import favoriteOutline from '../svg/favorite_border-24px.svg';
import favorite from '../svg/favorite-24px.svg';
import shoppingCartOutline from "../svg/shopping_cart-24px (1).svg";
import shoppingCart from "../svg/shopping_cart-24px.svg";
import arrowUp from "../svg/arrow_upward-24px.svg";
import downArrow from "../svg/arrow_downward-24px.svg";
import lyrics from '../svg/lyrics.svg'

function Main() {
    return (
        <>
            <Header />
            <main>
                {songs.map((song) => {
                    return (
                        <article key={song.id} className="song_cart">
                            <div>
                                {
                                    song.isFavorited === true 
                                    ? <img src={favorite} alt="favorited"/>
                                    : <img src={favoriteOutline} alt="not favorited" />
                                }
                            </div>
                            <header className="header">
                                <h2 className="heading">{song.title}</h2>
                                <p>{song.singer}</p>
                            </header>
                            <div className="voting">
                                <div className="up_votes">
                                    <span>{song.upVotes}</span>
                                    <img className="up_votes_icon" src={arrowUp} alt="Upvotes" />
                                </div>
                                <div className="down_votes">
                                    <span>{song.downVotes}</span>
                                    <img className="down_votes_icon" src={downArrow} alt="Downvotes" />
                                </div>
                            </div>
                            <div>
                                <img src={shoppingCartOutline} alt="shopping cart" />
                            </div>
                            <div>
                                <img src={lyrics} alt="song lyrics" />
                            </div>
                        </article>
                    )
                })}
            </main>
        </>
    )
}

export default Main