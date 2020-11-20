import React from 'react';
import {Link} from 'react-router-dom';

import ShoppingCart from '../svg/shopping_cart-24px.svg';

export default function Header() {
    return (
        <header>
            <h1>
                Hit Parade
            </h1>
            <div className="pages">
                <Link className="link" to="/">
                    🔥 Popular songs
                </Link>
                <Link className="link" to="/styles">
                    💗 Styles
                </Link>
                <Link className="link" to="/add">
                    😃 Add
                </Link>
                <Link className="link link_cart" to="/cart">
                    <img src={ShoppingCart} alt="Shopping cart" />
                    <p>Cart</p> 
                </Link>
            </div>
        </header>
    )
}
