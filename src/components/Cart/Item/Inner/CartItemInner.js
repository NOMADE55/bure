import React from 'react';
import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';

const defaultPrice = {
    amount: 0,
    symbol: "$"
};

const defaultImage = {
    src: "",
    alt: ""
};

function CartItemInner({
    name = "",
    quantity = 1,
    price = defaultPrice,
    image = defaultImage,
    removeFromCart = () => {}
}) {
    price = {...defaultPrice, ...price};
    image = {...defaultImage, ...image};

    const totalPrice = quantity * price.amount;
    return (
        <div className="cart-item">
            <div class="thumbnail">
                <img src={image.src} alt={image.alt || name} width="50" />
            </div>
            <span className="name">{name}</span>
            <div className="data">
                <div className="price">
                    {price.symbol}{totalPrice}
                </div>
                <button className="button is-outline is-danger" onClick={removeFromCart}>
                    <Icon path={mdiDelete} size="2rem" />
                </button>
            </div>
        </div>
    );
}

export default CartItemInner;
