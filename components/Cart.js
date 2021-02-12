import React from 'react'
import {connect} from 'react-redux';
import CartItem from '../components/CartItem';


function Cart({cartItems}) {
    const cartItemElement = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));

    const totalPrice = cartItems.reduce((priceTotal, price) => priceTotal + parseInt(price.price), 0);

    function buySongs() {
        alert(`Your songs cost you ${totalPrice} Ar`);
    }

    return (
        cartItems.length ?
        <div>
            <h2>Cart</h2>
            {cartItemElement}
            <div className="buy">
                <button onClick={() => buySongs()} className="buy_bttn" type="button">Buy</button>
                <p>Total: {totalPrice} Ar</p>
            </div>
        </div>
        : <p>Cart is empty</p>
    )
}


export default connect((state) => ({cartItems: state.cartItems}), null) (Cart);

