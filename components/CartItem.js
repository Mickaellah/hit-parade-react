import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions';

import trashIcon from '../svg/trash.svg';

function CartItem({item, removeFromCart}) {
    return (
        <div>
            <article className="cart_item">
                <button onClick={() => removeFromCart(item.id)} className="delete_bttn" id={item.id} onClick={() => removeFromCart(item.id)}>
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

const mapDispatchToProps = {
    removeFromCart,
}

export default connect((state) => ({cartItems: state.cartItems}), mapDispatchToProps) (CartItem);
