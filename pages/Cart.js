import React, {useContext} from 'react'
import {Context} from '../Context';
import CartItem from '../components/CartItem';

export default function Cart() {
    const {cartItems} = useContext(Context);
    const cartItemElement = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));

    const totalPrice = cartItems.reduce((priceTotal, price) => priceTotal + parseInt(price.price), 0);

    function buySongs() {
        alert(`Your songs cost you ${totalPrice} Ar`);
    }

    return (
        <div>
            <h2>Cart</h2>
            {cartItemElement}
            <div className="buy">
                <button onClick={() => buySongs()} className="buy_bttn" type="button">Buy</button>
                <p>Total: {totalPrice} Ar</p>
            </div>
        </div>
    )
}
