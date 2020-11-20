import React from 'react';

import trashIcon from '../svg/trash.svg';

export default function CartItem({item}) {
    return (
        <div>
            <article className="cart_item">
                <div>
                    <img src={trashIcon} alt="delete icon" />
                </div>
                <div className="cart_title">
                    <h3>{item.title}</h3>
                    <p>{item.singer}</p>
                </div>
                <div>
                    <p>{item.price}</p>
                </div>
            </article>
        </div>
    )
}
