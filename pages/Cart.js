import React, {useContext} from 'react'
import {Context} from '../Context';
import CartItem from '../components/CartItem';

export default function Cart() {
    const {cartItems} = useContext(Context);
    const cartItemElement = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    return (
        <div>
            <h2>Cart</h2>
            {cartItemElement}
            <div>
                <button type="button">Buy</button>
                <p>Total: </p>
            </div>
        </div>
    )
}
