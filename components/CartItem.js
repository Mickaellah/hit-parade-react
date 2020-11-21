import React, {useContext} from 'react';

import trashIcon from '../svg/trash.svg';
import {Context} from '../Context';

export default function CartItem({item}) {
    const {removeFromCart} = useContext(Context);
    return (
        <div>
            <article className="cart_item">
                <button className="delete_bttn" id={item.id} onClick={() => removeFromCart(item.id)}>
                    <img id={item.id} src={trashIcon} alt="delete icon" />
                </button>
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
